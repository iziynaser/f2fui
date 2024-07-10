<template>
  <div>
    <div>
      invoice
    </div>
    <div>
      <b-card no-body>
        <b-tabs pills card>
          <b-tab title="find invoice">
            <findInvoice />
          </b-tab>
          <b-tab title="header">
            <invoiceHeader />
            <!-- <router-link to="/invoiceHeader">invoice header</router-link> -->
          </b-tab>
          <b-tab title="items">
            <invoiceItems />
            <!-- <router-link to="/invoiceItems">invoice items</router-link> -->
          </b-tab>
          <b-tab title="overview">
            <invoiceOverview />
            <!-- <router-link to="/invoiceOverview">overview</router-link> -->
          </b-tab>
          <b-tab></b-tab>
        </b-tabs>
      </b-card>
    </div>


  </div>
</template>
<script>

import findInvoice from './findInvoice'
import invoiceHeader from './invoiceHeader.vue'
import invoiceItems from './invoiceItems.vue'
import invoiceOverview from './invoiceOverview'

export default {
  name: 'invoice',
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

  },
  components: {
    findInvoice,
    invoiceHeader,
    invoiceItems,
    invoiceOverview
  }
}
</script>

<style scoped></style>