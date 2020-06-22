<template>
    <div>
        <div>
            invoiceOverivew
        </div>
        <div>
          <b-button variant="link">create</b-button>
          <b-button variant="link">copy</b-button>
          <b-button variant="link">pdf</b-button>
          <b-button variant="link">send email</b-button>
          <b-button variant="link">send sms</b-button>
          <b-button variant="link">change status to ....</b-button>
          <b-button variant="link">save as template </b-button>          
        </div>

        <b-card title="header"></b-card>
        <b-card title="status"></b-card>
        <b-card title="items"></b-card>
        <b-card title="transaction"></b-card>

    </div>
</template>

<script>
export default {
    name:'invoiceOverview',
    props:{
          } ,
    data(){
      return {
        
      }
    } ,
    methods:{

    }      
}
</script>

<style scoped>

</style>