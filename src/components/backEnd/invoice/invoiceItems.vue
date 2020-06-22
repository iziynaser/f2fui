<template>
    <div>
          <div>            
            invoice Items
          </div>
          <b-form>
                        
              <b-row>
                <b-col class="col-2">current date</b-col>
                <b-col class="col-4">
                  <b-form-input id="" required="" placeholder="" />
                </b-col>                
                <b-col class="col-2">date</b-col>
                <b-col class="col-4" >
                  <b-form-input id="" required="" placeholder="" />
                </b-col>                
              </b-row>
            
            
            <b-row>
                <b-col class="col-2">title</b-col>
                <b-col class="col-4">
                  <b-form-input id="" required="" placeholder="" />
                </b-col>                
                <b-col class="col-2">description</b-col>
                <b-col class="col-4">
                  <b-form-input id="" required="" placeholder="" />
                </b-col>                
            </b-row>
                        
              <b-row>
                <b-col  class="col-2">creator</b-col>
                <b-col  class="col-4">
                  <b-form-input id="" required="" placeholder="" />
                </b-col>                
                <b-col  class="col-2">from person</b-col>
                <b-col  class="col-4">
                  <b-form-input id="" required="" placeholder="" />
                </b-col>                
            </b-row>
               
              <b-row>
                <b-col class="col-2">to person</b-col>
                <b-col class="col-4">
                  <b-form-input id="" required="" placeholder="" />
                </b-col>                
                <b-col class="col-2">invoice type</b-col>
                <b-col class="col-4">
                  <b-form-input id="" required="" placeholder="" />
                </b-col>                
               </b-row>


            </b-form>
    
    </div>

</template>

<script>
export default {
    name:'invoiceItems',
    props:{
          } ,
    data(){
      return {
        visible: true,
        errors:[],
        form:{

        }
      }
    } ,
    methods:{

    }      
}
</script>

<style scoped>


</style>