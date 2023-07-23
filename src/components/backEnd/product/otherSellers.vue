<template>
    <div>
        
        name of seller,amount, add to basket button          
        <f2fTable :searchFields="fields" :searchResult="items" caption="list of other sellers (table)"  />

        seeMore<br/>
        seeLess

    </div>
</template>

<script>

import * as axios from 'axios';
import f2fTable from '../../base/f2fTable'

export default {
    name:'otherSellers',
    props:{
          } ,
    data(){
      return {
          isBusy:false,
          errors:{},
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
                    url:'/ProductPrice/list',
                })
                .then(function(res){
                      self.items = res.data; 
                })
                .catch(function(error){
                    console.log(error)    ;
                });
        },
    } ,
    components:{
        f2fTable
    },
    mounted(){
        this.listOfOtherSellers();
    }        
}
</script>

<style scoped>

</style>