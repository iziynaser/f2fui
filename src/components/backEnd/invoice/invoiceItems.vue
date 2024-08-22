<template>
  <div>
    <b-container fluid>

      <b-form>

        <b-row class="my-1">
          <b-col sm="2">current date</b-col>
          <b-col sm="4">
            <b-form-input id="" required="" placeholder="" />
          </b-col>
          <b-col sm="2">date</b-col>
          <b-col sm="4">
            <b-form-input id="" required="" placeholder="" />
          </b-col>
        </b-row>


        <b-row class="my-1">
          <b-col sm="2">title</b-col>
          <b-col sm="4">
            <b-form-input id="" required="" placeholder="" />
          </b-col>
          <b-col sm="2">description</b-col>
          <b-col sm="4">
            <b-form-input id="" required="" placeholder="" />
          </b-col>
        </b-row>

        <b-row class="my-1">
          <b-col sm="2">creator</b-col>
          <b-col sm="4">
            <b-form-input id="" required="" placeholder="" />
          </b-col>
          <b-col sm="2">from person</b-col>
          <b-col sm="4">
            <b-form-input id="" required="" placeholder="" />
          </b-col>
        </b-row>

        <b-row class="my-1">
          <b-col sm="2">to person</b-col>
          <b-col sm="4">
            <b-form-input id="" required="" placeholder="" />
          </b-col>
          <b-col sm="2">invoice type</b-col>
          <b-col sm="4">
            <b-form-input id="" required="" placeholder="" />
          </b-col>
        </b-row>


      </b-form>
      <b-card>
        <f2fTable :searchResult="searchResult" :searchFields="searchFields" :busy="isBusy" caption="search results" />
      </b-card>
    </b-container>
  </div>
</template>

<script>
import f2fTable from '../../base/f2fTable'

export default {
  name: 'invoiceItems',
  props: {
  },
  data() {
    return {
      isBusy: false,
      visible: true,
      errors: [],
      searchResult: [],
      searchFields: [],
      form: {

      }
    }
  },
  components: {
    f2fTable
  },
  methods: {

  }
}
</script>

<style scoped></style>