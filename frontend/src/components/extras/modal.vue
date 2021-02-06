  <template>
  <div>
    <!-- <b-button  @click="dataHidden()">{{title2}}</b-button> -->
    <b-button v-b-modal.modalPopover  id="buttons" variant="success" @click="dataHidden()">{{title2}}</b-button>

    <b-modal id="modalPopover" v-if="itemModal.showFrame">
      <b-card title="Card Title" no-body>
        <b-card-header header-tag="nav">
          <b-nav card-header tabs>
            <b-nav-item id="listFull" active>Imagem {{itemModal.id}}</b-nav-item>
          </b-nav>
        </b-card-header>

        <b-card-body class="text-center">
          <b-card-text>
            <div class="d-block text-center">
              <ul id="container">
                <li id="itemContainer" v-for="item in itemModal.data" :key="item">{{loadNameClass2(item.classe)}} <span id="colorValue">{{item.value}}</span></li>
              </ul>
            </div>
          </b-card-text>
        </b-card-body>
      </b-card>
    </b-modal>
  </div>
</template>

<script>

// Arquivo de styles
import './styles_extras.css'

export default {

  props: {
    datasets: [],
    title: '',
    idItens: 0,
    title2: ''
  },

  data () {
    return {
      itemModal: []
    }
  },

  methods: {
    dataHidden () {
      var id = this.idItens

      let data = []
      this.datasets.Itens.map(item => {
        if (item.id === id) {
          item.showFrame = true
          data.push(item)
        } else if (item.id !== id) {
          item.showFrame = false
        }
      })
      this.itemModal = data[0]
    },

    loadNameClass (data) { // Apenas retorna o nome com um espaçamento
      console.log(data)
      return data.split(' ')[0]
    },

    loadNameClass2 (data) { // Converte o '_' em ' '
      data = data.split('_')[0]

      return data
    }
  }
}
</script>
