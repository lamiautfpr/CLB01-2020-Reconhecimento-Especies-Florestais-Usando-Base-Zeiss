<template>
  <div>
    <div id="mainDiv">
      <b-alert class="alert-bootstrap"
        :show="dismissCountDown"
        dismissible
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged">
        {{msgAlert}}
      </b-alert>
      <div class="styleMain main">  <!-- Essa div é responsável por receber a imagem e exibi-lá -->
        <div class="imgContent" id="imgContent">

          <!--"imagePreview", mostra a imagem após selecionada-->

          <div id="receive-image">
            <img class="imagePreview" :src="uploadedImage" alt=""/>

            <div id="divUpload">
              <span title="Enviar imagem(s)" class="attachFileSpan"
                onclick="document.getElementById('image').click()">

                <b-img id="imageUpload" :key="mainProps" blank-color="rgba(128, 255, 255, 0.5)"
                  src="https://image.flaticon.com/icons/png/512/12/12313.png" width="100" alt="RGBa color image">
                </b-img>
              </span>
              <br/>

              <input type="file" id="image" class="file_input" name="photo"
                @change="onFileChange" accept="image/*" multiple required/>
            </div>
          </div>

          <div id="ButtonClassfication">
            <!--Botões do bootstrap-->
            <button type="button" @click="onUploadImage" id="buttonSend" class="btn btn-dark font-button">
              Classificar
            </button>
            <br />
            <button type="button" @click="onUploadImage" id="buttonSave" class="btn btn-dark font-button">
              Salvar Imagem
            </button>
            <br />
            <a href="/">
              <button type="button" id="buttonConsult" class="btn btn-dark font-button">
                Nova consulta
              </button></a>
          </div>
        </div>
        <div id="margin">
          <ul id="listImage">
            <h4 id="title-image" style="visibility: hidden;">Images carregadas</h4>
            <li v-for="item in listImage" :key="item.id">
              <img :src="item.data" style="width: 100px; margin-top: 10px;"/>
              <Modal :datasets="{Itens}" :idItens="item.id" title2="Detalhes"/>
              <b-button variant="danger" style="width: 50px; height: 37px; margin: 20px 14px;" @click="deleteImage(item)">X</b-button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* Importando biblioteca para se comunicar com o Flask (backend) */
import axios from 'axios'
import Modal from './extras/modal'

/* Importando o arquivo CSS */
import './style.css'
const API_URL = 'http://127.0.0.1:5000' // Link disponibilizado pelo backend

export default {
  data () {
    return {
      listImage: [],
      uploadedImage: null,
      listTop: null,
      Itens: [],
      itemModal: [],
      count: -1,
      dismissSecs: 5,
      dismissCountDown: 0,
      msgAlert: ''
    }
  },

  components: {
    Modal
  },

  methods: {

    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },

    showAlert (msg) {
      this.msgAlert = msg
      this.dismissCountDown = this.dismissSecs
    },

    // Reflete a imagem selecionada

    onFileChange (e) {
      let files = e.target.files || e.dataTransfer.files

      this.createImage(files[0])

      document.getElementById('imageUpload').style.width = '100px'
    },

    // Vizualiza a imagem selecionada

    createImage (file) {
      let reader = new FileReader()

      reader.onload = (e) => {
        this.uploadedImage = e.target.result
      }

      reader.readAsDataURL(file)
    },

    // Upa a imagem para o servidor
    saveImage () {
      if (this.listImage.length <= 5) {
        this.count += 1
        document.getElementById('title-image').style.visibility = 'visible' // Definindo que o h4 ficará visivel a partir de agora, já que a imagem foi carregada e será exibida na tela

        var images = {
          id: this.count,
          data: this.uploadedImage
        }

        this.listImage.push(images)
      } else {
        this.showAlert('Não é possível inserir mais do que 6 imagens')
      }
    },

    async onUploadImage (e) {
      const id = e.target.id

      if (id === 'buttonSend') {
        const dataset = this.listImage

        for (let i = 0; i < dataset.length; i++) {
          var params = new FormData()
          console.log(dataset[i]['data'])
          params.append('image', dataset[i]['data'])
          await axios.post(`${API_URL}/classification`, params).then((res) => {
            // this.listTop = this.loadData(res.data.response)
            this.Itens.push(this.loadListFull(res.data.response, i))
          })
        }
      } else {
        this.saveImage() // Caso a condiçõ seja falsa, a imagem será apenas salva em um array fazendo com que depois possa realizar o multiprocessamento
      }
    },

    loadData (data) {
      // Essa função é responsável por realizar o carregamento da barra de loading disponibilizada logo após receber a imagem e enviar a ação de 'classificar'

      var i = 0
      var ProgressBar = require('progressbar.js') // Cria uma variavel do tipo 'var' fazendo com que receba um objeto da biblioteca progressbar.js

      const obj = JSON.parse(data) // Converte os dados recebidos em um JSON.parse

      const DataForm = []
      for (i = 0; i < 3; i++) {
        DataForm.push(obj[i]) // Manda as 3 especies que mais se comparam as caracteristicas retiradas da imagem passada
      }

      for (i = 0; i < 3; i++) {
        var Nome = DataForm[i]['classe']
        var Percent = DataForm[i]['value']
        Nome = Nome.split('_')
        Nome = Nome[0]
        document.getElementById('list' + (i + 1)).innerHTML =
          parseFloat(Percent.toFixed(2)) +
          ' - ' +
          Nome +
          '<div id="listDiv"' + (i + 1) + '""></div>'
      }

      var bar1 = new ProgressBar.Line('#listDiv1', { easing: 'easeInOut' })
      var bar2 = new ProgressBar.Line('#listDiv2', { easing: 'easeInOut' })
      var bar3 = new ProgressBar.Line('#listDiv3', { easing: 'easeInOut' })

      bar1.animate(parseInt(DataForm[0]['value']) / 100)
      bar2.animate(parseInt(DataForm[1]['value']) / 100)
      bar3.animate(parseInt(DataForm[2]['value']) / 100)

      document.getElementById('imgResultId').style.visibility = 'visible'

      return DataForm
    },

    loadListFull (data, idReceive) { // Está função é responsável por carregar a lista completa da classificação.
      var i = 0

      const DataForm = []

      for (i = 0; i < 44; i++) {
        DataForm.push(JSON.parse(data)[i])
      }

      const dataset = {
        id: idReceive,
        data: DataForm,
        showFrame: 0
      }

      return dataset
    },

    deleteImage (data) { // Terminar isso depois **************
      let itemPassed = []

      this.listImage.map((item) => { // Função 'map' é responsável por pegar cada item e realizar a verificação do id, ou seja, será inserido todos os itens que não tiverem o id correspondente, sendo que cada id é único para cada imagem.
        if (item.id !== data.id) {
          itemPassed.push(item)
        }
      })

      this.listImage = itemPassed
    },

    mostrarData () {
      console.log(this.Itens)
    }
  }
}
</script>
