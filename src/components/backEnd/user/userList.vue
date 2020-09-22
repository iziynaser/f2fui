<template>
    <div>
           <f2fTable :items="items"  :fields="fields" caption="mm"  />                  
    </div>
</template>

<script>

import axios from 'axios'
import f2fTable from '../../base/f2fTable'

export default {
    name:'userList',
    data(){
      return {
        items:[],    
        fields:[
            {key:"id",label:'title'},
        ],            
      } 
    },
    methods:{
        listOfCategoriesRelatedToProduct(){
                var self = this;
                this.errors= {};
                this.isBusy = true;
                axios({
                    method:'GET',
                    url:'http://localhost:8080/management/user/list',
                })
                .then(function(res){
                      self.items = res.data; 
                })
                .catch(function(error){
                    console.log(error)    ;
                });
        },
    },
    components:{
        f2fTable
    } ,
    mounted(){
            this.listOfCategoriesRelatedToProduct();
    }      
}
</script>

<style scoped>

</style>