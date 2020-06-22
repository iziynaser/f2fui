<template>
    <div>
          <div>            
            invoice
          </div>

          <div>
            <b-button variant="link" size="sm">
              <router-link to="/invoiceHeader">invoice header</router-link>          
            </b-button>
            <b-button variant="link" size="sm">
              <router-link to="/invoiceItems" >invoice items</router-link>              
              </b-button>
            <b-button variant="link" size="sm">
              <router-link to="/invoiceOverview" >overview</router-link>              
            </b-button>
          </div>

            <findInvoice/>

    </div>

</template>
<script>

import findInvoice from './findInvoice'

export default {
    name:'invoice',
    props:{
          },
    data(){
      return {
        visible: true,
        errors:[],
        form:{

        }
      }
    },
    methods:{

    },
    components:{
      findInvoice
    }
}
</script>

<style scoped>


</style>