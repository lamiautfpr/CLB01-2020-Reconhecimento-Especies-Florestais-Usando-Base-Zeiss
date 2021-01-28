<template>
  <div>
    <div id="mainDiv">
      <div class="styleMain main" id="main">
        <div class="imgContent" id="imgContent">
          <!--"imagePreview", mostra a imagem após selecionada-->
          <img
            class="imagePreview"
            :src="uploadedImage"
            alt=" "
            style="width: 40%; margin-top: 30px; border-radius: 20px"
          />
          <div id="divUpload">
            <span
              title="attach file"
              class="attachFileSpan"
              onclick="document.getElementById('image').click()"
            >
              <b-img
                id="imageUpload"
                v-bind="mainProps"
                blank-color="rgba(128, 255, 255, 0.5)"
                src="https://image.flaticon.com/icons/png/512/12/12313.png"
                width="100"
                alt="RGBa color image"
              ></b-img>
            </span>
            <br />

            <input
              type="file"
              id="image"
              class="file_input"
              name="photo"
              @change="onFileChange"
              accept="image/*"
              multiple
              required
            />
          </div>

          <div id="ButtonClassfication">
            <!--Botões do bootstrap-->
            <button
              type="button"
              @click="onUploadImage"
              id="buttonSend"
              class="btn btn-dark"
            >
              Classification
            </button>
            <br />
            <button
              type="button"
              @click="onUploadImage"
              id="buttonSave"
              class="btn btn-dark"
            >
              Save Image
            </button>
          </div>
        </div>
      </div>

      <div class="imgResult" id="imgResultId">
        <b-card-group deck id="divResultModel" disabled="true">
          <b-card
            id="dropdown-offset"
            offset="25"
            text="Offset Dropdown"
            class="m-2"
          >
            <button
              type="button"
              id="list1"
              disabled="true"
              class="list-group-item list-group-item-action butList"
            ></button>
            <button
              type="button"
              id="list2"
              disabled="true"
              class="list-group-item list-group-item-action butList"
            ></button>
            <button
              type="button"
              id="list3"
              disabled="true"
              class="list-group-item list-group-item-action butList"
            ></button>
          </b-card>
        </b-card-group>

        <div>
          <b-button variant="dark" v-b-modal.modal-1
            >Mais detalhes
            <b-modal id="modal-1" title="Detalhes">
              <b-card
                id="dropdown-offset card-detalhe"
                offset="25"
                text="Offset Dropdown"
                class="m-2"
              >
                <button
                  type="button"
                  v-for="item in Itens"
                  disabled="true"
                  class="list-group-item list-group-item-action butList"
                >
                  <div class="detalhes-1">
                    <div id="nameClass">
                      {{ loadNameClass(item.classe) }}
                      <span id="colorValue"
                        >{{ item.value
                        }}<span style="color: black">%</span></span
                      >
                    </div>
                  </div>
                </button>
              </b-card>
            </b-modal>
          </b-button>
        </div>
      </div>
    </div>

    <div>
      <img :src="item" v-for="item in listImage" width="50px" />
    </div>
  </div>
</template>

<script>
import axios from "axios"; // Importando biblioteca para se comunicar com o Flask (backend)
import "./style.css"; //Importando o arquivo CSS

const API_URL = "http://127.0.0.1:5000"; // Link disponibilizado pelo backend

export default {
  data() {
    return {
      buttonClick: "",
      listImage: [],
      uploadedImage: null,
      listTop: null,
      Itens: null,
    };
  },

  methods: {
    //Reflete a imagem selecionada

    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;

      this.createImage(files[0]);

      document.getElementById("imageUpload").style.width = "40px";
      document.getElementById("imageUpload").style.marginTop = "10px"; // Esses documents fazem com que haja um espaçamento logo após receber a ação do button
    },

    //Vizualiza a imagem selecionada

    createImage(file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.uploadedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    //Upa a imagem para o servidor
    saveImage() {
      this.listImage.push(this.uploadedImage);
    },

    //
    onUploadImage(e) {
      const id = e.target.id;

      if (id == "buttonSend") {
        var params = new FormData();
        params.append("image", this.uploadedImage);
        document.getElementById("imgContent").style.width = "30%";
        document.getElementById("main").style.width = "60%";
        axios.post(`${API_URL}/classification`, params).then((res) => {
          this.listTop = this.loadData(res.data.response);
          this.Itens = this.loadListFull(res.data.response);
        });
      } else {
        this.saveImage(); // Caso a condiçõ seja falsa, a imagem será apenas salva em um array fazendo com que depois possa realizar o multiprocessamento
      }
    },

    loadData(data) {
      // Essa função é responsável por realizar o carregamento da barra de loading disponibilizada logo após receber a imagem e enviar a ação de 'classificar'

      var i = 0;
      var ProgressBar = require("progressbar.js"); // Cria uma variavel do tipo 'var' fazendo com que receba um objeto da biblioteca progressbar.js

      const obj = JSON.parse(data); // Converte os dados recebidos em um JSON.parse

      const DataForm = [];
      for (i = 0; i < 3; i++) {
        DataForm.push(obj[i]); // Manda as 3 especies que mais se comparam as caracteristicas retiradas da imagem passada
      }

      for (i = 0; i < 3; i++) {
        var Nome = DataForm[i]["classe"];
        var Percent = DataForm[i]["value"];
        Nome = Nome.split("_");
        Nome = Nome[0];
        document.getElementById("list" + (i + 1)).innerHTML =
          parseFloat(Percent.toFixed(2)) +
          " - " +
          Nome +
          '<div id="listDiv' +
          (i + 1) +
          '"></div>';
      }

      var bar1 = new ProgressBar.Line("#listDiv1", { easing: "easeInOut" });
      var bar2 = new ProgressBar.Line("#listDiv2", { easing: "easeInOut" });
      var bar3 = new ProgressBar.Line("#listDiv3", { easing: "easeInOut" });

      bar1.animate(parseInt(DataForm[0]["value"]) / 100);
      bar2.animate(parseInt(DataForm[1]["value"]) / 100);
      bar3.animate(parseInt(DataForm[2]["value"]) / 100);

      document.getElementById("imgResultId").style.visibility = "visible";

      return DataForm;
    },

    loadListFull(data) {
      var i = 0;

      const DataForm = [];

      for (i = 0; i < 44; i++) {
        DataForm.push(JSON.parse(data)[i]);
      }

      return DataForm;
    },

    loadNameClass(data) {
      return data.split("_")[0];
    },

    loadNameClass2(data, value) {
      data = data.split("_")[0];

      data = data.split(" ")[0];

      return data;
    },
  },
};
</script>