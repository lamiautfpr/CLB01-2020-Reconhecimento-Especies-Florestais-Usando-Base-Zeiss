<template>
  <div>
    <div id="mainDiv">
      <div class="styleMain main">  <!-- Essa div é responsável por receber a imagem e exibi-lá -->
        <div class="imgContent" id="imgContent">

          <!--"imagePreview", mostra a imagem após selecionada-->

          <div id="receive-image">
            <img class="imagePreview" :src="uploadedImage" alt=""/>

            <div id="divUpload">
              <span title="Enviar imagem(s)" class="attachFileSpan"
                onclick="document.getElementById('image').click()">

                <b-img id="imageUpload" v-bind="mainProps" blank-color="rgba(128, 255, 255, 0.5)"
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
            <button type="button" @click="onUploadImage" id="buttonSend" class="btn btn-dark">
              Classification
            </button>

            <br />
            <button type="button" @click="onUploadImage" id="buttonSave" class="btn btn-dark">
              Save Image
            </button>
          </div>
        </div>
        <div id="margin">
          <ul id="listImage">
            <h4>Images carregadas</h4>
            <li v-for="item in listImage" :key="item.id">{{item.id}}<img :src="item.data" width="100px"/><Modal :data="item" title2="Detalhes"/><b-button variant="danger" style="width: 40%; height: 37px; margin-top: 14px; margin-right: 80px;" @click="deleteImage(item)">Apagar</b-button></li>
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
      Itens: null,
      count: -1
    }
  },

  components: {
    Modal
  },

  methods: {
    // Reflete a imagem selecionada

    onFileChange (e) {
      let files = e.target.files || e.dataTransfer.files

      this.createImage(files[0])

      document.getElementById('imageUpload').style.width = '100px'
      // document.getElementById('imageUpload').style.marginTop = '10px'; // Esses documents fazem com que haja um espaçamento logo após receber a ação do button
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
      this.count += 1

      var images = {
        id: this.count,
        data: this.uploadedImage
      }

      this.listImage.push(images)
    },

    onUploadImage (e) {
      const id = e.target.id

      if (id === 'buttonSend') {
        const dataset = this.listImage

        for (let i = 0; i < dataset.length; i++) {
          var params = new FormData()
          console.log(dataset[i]['data'])
          params.append('image', dataset[i]['data'])

          setInterval(() => {
            axios.post(`${API_URL}/classification`, params).then((res) => {
              // this.listTop = this.loadData(res.data.response)
              this.Itens = this.loadListFull(res.data.response, i)
            }, 2000)
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
        data: DataForm
      }

      return dataset
    },

    loadNameClass (data) { // Apenas retorna o nome com um espaçamento
      return data.split(' ')[0]
    },

    loadNameClass2 (data, value) { // Converte o '_' em ' '
      data = data.split('_')[0]

      data = data.split(' ')[0]

      return data
    },

    maxValue (data) {
      let maior = 0
      for (let i = 0; i < data.length; i++) {
        if (maior >= data[i]) {
          maior = data[i]
        }
      }
      console.log(data)
      return maior
    },

    deleteImage (data) { // Terminar isso depois **************
      const listImageTemp = this.listImage // Define um array temporário
      console.log('Id passado:' + data.id)
      console.log('Total de itens:' + this.listImage.length)
      console.log('Count: ' + this.count)

      listImageTemp.splice(listImageTemp.indexOf(data.id), 1)

      this.listImage = listImageTemp

      // for (let i = 0; i < this.listImage.length; i++) {
      //   if (data.id - 1 !== i) {
      //     listImageTemp.push(this.listImage[i])
      //     console.log(i)
      //   }
      // }

      console.log(listImageTemp)
      console.log(this.listImage)

      // listImageTemp.map((item) => {
      //   ListaId.push(item.id)
      // })

      // this.count = this.maxValue(ListaId[1])
      // console.log(this.count)
    }
  }
}
</script>
