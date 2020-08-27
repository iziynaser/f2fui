<template>
    <div>
                  <div class="p-2 row">
          <b-col>
             <b-button variant="outline-primary">
                zemanate asl boodane kala
                <img src="http://localhost:8080/images/icon/warranti.png" 
                     class="w-25 img-rounded" 
                     @click="showProduct()"/>
             </b-button>
          </b-col>
          <b-col>
            <b-button variant="outline-primary">
                <img src="http://localhost:8080/images/icon/gift.png"      
                     class="w-25 img-rounded" 
                     @click="showProduct()"/>  
            </b-button>    
          </b-col>
          <b-col>
            <b-button variant="outline-primary">
              emkan bazgasht kala
              <img src="http://localhost:8080/images/icon/exam.png"      
                   class="w-25 img-rounded" 
                   @click="showProduct()"/>  
            </b-button>  
          </b-col>
          <b-col>
            <b-button variant="outline-primary">
                express delivery and other
                <img src="http://localhost:8080/images/icon/delivery.png"  
                     class="w-25 img-rounded" 
                     @click="showProduct()"/>  
            </b-button>    
          </b-col>
          <b-col>
            <b-button variant="outline-primary">
                emkan pardakht dar mahal
                <img src="http://localhost:8080/images/icon/buy.png"   
                     class="w-25 img-rounded" 
                     @click="showProduct()"/>            
            </b-button>    
          </b-col>
        </div>

    </div>
</template>

<script>
export default {
    name:'productAttribute',
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