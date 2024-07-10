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
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'invoiceItems',
  props: {
  },
  data() {
    return {
      visible: true,
      errors: [],
      form: {

      }
    }
  },
  methods: {

  }
}
</script>

<style scoped></style>