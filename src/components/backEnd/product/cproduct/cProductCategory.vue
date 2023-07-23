<template>
    <div>

          <f2fTable :searchResult="items" :searchFields="fields" caption="list of categories related to this product" />  

          <b-container fluid>
                <b-row  class="my-1">
                        <b-col sm="3">
                            <label for="row">row</label> 
                        </b-col>
                        <b-col sm="9">
                            <b-form-input id="row" readonly type="text"></b-form-input> 
                        </b-col>
                </b-row>  
                <b-row  class="my-1">
                        <b-col sm="3">
                            <label for="fromDate">from date</label> 
                        </b-col>
                        <b-col sm="9">
                            <b-form-input id="fromDate" type="text"></b-form-input> 
                        </b-col>
                </b-row>  
                <b-row  class="my-1">
                        <b-col sm="3">
                            <label for="toDate">to date</label> 
                        </b-col>
                        <b-col sm="9">
                            <b-form-input id="toDate" type="text"></b-form-input> 
                        </b-col>
                </b-row>  
                <b-row  class="my-1">
                        <b-col sm="3">
                            <label for="parentCategory">{{$t('CPRODUCT_CATEGORY_parentCategory')}}</label> 
                        </b-col>
                        <b-col sm="9">
                            <b-form-input id="parentCategory" type="text"></b-form-input> 
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
              {key:'name',label:'nam'},
              {key:'fromDate',label:'از تاریخ'},
              {key:'toDate',label:'تا تاریخ'},
              {key:'description',label:'description'}
          ] ,
      }
    } ,
    methods:{
        listOfCategoriesRelatedToProduct(){
                var self = this;
                this.errors= {};
                this.isBusy = "true";
                axios({
                    method:'GET',
                    url:'/productCategories/listOfCategoriesRelatedToProduct',
                    params:{productId:self.id} 
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