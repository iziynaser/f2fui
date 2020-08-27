<template>
    <div>

          <f2fTable :items="items" :fields="fields" caption="list of categories related to this product" />  

          <b-container fluid>
                <b-row  class="my-1">
                        <b-col sm="3">
                            <label>row</label> 
                        </b-col>
                        <b-col sm="9">
                            <b-form-input readonly="true" type="text"></b-form-input> 
                        </b-col>
                </b-row>  
                <b-row  class="my-1">
                        <b-col sm="3">
                            <label>from date</label> 
                        </b-col>
                        <b-col sm="9">
                            <b-form-input type="text"></b-form-input> 
                        </b-col>
                </b-row>  
                <b-row  class="my-1">
                        <b-col sm="3">
                            <label>to date</label> 
                        </b-col>
                        <b-col sm="9">
                            <b-form-input type="text"></b-form-input> 
                        </b-col>
                </b-row>  
                <b-row  class="my-1">
                        <b-col sm="3">
                            <label>{{$t('CPRODUCT_CATEGORY_parentCategory')}}</label> 
                        </b-col>
                        <b-col sm="9">
                            <b-form-input type="text"></b-form-input> 
                        </b-col>
                </b-row>
                <b-row class="my-1">
                    <b-col sm="3">
                           <b-button>save</b-button> 
                    </b-col>
                </b-row>  
            </b-container>    
    </div>
</template>

<script>

import * as axios from 'axios';
import f2fTable from '../../../base/f2fTable'

export default {
    name:'cProductCategory',
    props:{
            id:Number,
            title:String
          } ,
    data(){
      return {
          items:[],
          fields:[
              {key:'id',label:'شناسه'},
              {key:'fromDate',label:'از تاریخ'},
              {key:'toDate',label:'تا تاریخ'},
              {key:'category',label:'دسته'},
          ] ,
      }
    } ,
    methods:{
        listOfCategoriesRelatedToProduct(){
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
    },
    components:{
        f2fTable
    } ,
    mounted(){
        if(this.id!==0)
            this.listOfCategoriesRelatedToProduct();
    }      
}
</script>

<style scoped>

</style>