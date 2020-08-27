<template>
    <div>

          <b-table small striped hover 
                    head-variant="dark"
                    responsive
                    caption-top
                   :fields="fields"
                   :items="items">
                <template v-slot:table-caption>list of categories related to this product</template> 
                
                <template v-slot:cell(index)="data">
                    {{data.index+1}}
                </template>  
          </b-table>

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
    } ,
    mounted(){
        if(this.id!==0)
            this.listOfCategoriesRelatedToProduct();
    }      
}
</script>

<style scoped>

</style>