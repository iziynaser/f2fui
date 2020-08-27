<template>
    <div>
                  <b-table small striped hover 
                    head-variant="dark"
                    responsive
                    caption-top
                   :fields="fields"
                   :items="items">
                <template v-slot:table-caption>
                    list of other sellers (table)
                </template> 
                
                <template v-slot:cell(index)="data">
                    {{data.index+1}}
                </template>  
          </b-table>
         
    </div>
</template>

<script>

import * as axios from 'axios';

export default {
    name:'templateTable',
    props:{
          } ,
    data(){
      return {
          items:[],
          fields:[
              {key:'id',label:'شناسه'},
              {key:'fromDate',label:'از تاریخ'},
              {key:'toDate',label:'تا تاریخ'},
              {key:'price',label:'قیمت'},
              {key:'productPriceType',label:'قیمت گذاری'},
              {key:'currency',label:'ارز'},
          ] ,                
      }
    } ,
    methods:{
        listOfOtherSellers(){
                var self = this;
                this.errors= {};
                this.isBusy = true;
                axios({
                    method:'GET',
                    url:'http://localhost:8080/f2f/ProductPrice/list',
                })
                .then(function(res){
                      self.items = res.data; 
                })
                .catch(function(error){
                    console.log(error)    ;
                });
        },
    } ,
    mounted(){
        this.listOfOtherSellers();
    }        
}
</script>

<style scoped>

</style>