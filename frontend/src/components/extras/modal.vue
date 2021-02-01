<template>
  <div id="buttons">
    <b-button variant="success">{{title2}}</b-button>
<!--
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

        <b-button variant="dark" v-b-modal.modal-1
          >Mais detalhes
          <b-modal id="modal-1" title="Detalhes">
            <div>
              <b-card
                id="dropdown-offset card-detalhe" offset="25" text="Offset Dropdown" class="m-2">

                <button type="button" v-for="item in Itens" v-bind="item"
                  disabled="true" class="list-group-item list-group-item-action butList">

                  <div class="detalhes-1">
                    <div id="nameClass">
                      {{ loadNameClass(item.classe) }}
                      <span id="colorValue">
                        {{ item.value
                        }}<span style="color: black">%</span></span
                      >
                    </div>
                  </div>
                </button>
              </b-card>
            </div>
          </b-modal>
        </b-button>
      </div>
-->

  </div>
</template>

<script>

// Arquivo de styles
import './styles_extras.css'

export default {
  props: {
    data: [],
    title: '',
    title2: ''
  }
}
</script>
