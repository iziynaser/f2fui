<template>
    <div>
        <b-row>
            <b-col sm="3">
                <b-link>remove expire all products</b-link>
            </b-col>
            <b-col sm="3">
                <b-link>expire all products memnber</b-link>
            </b-col>
        </b-row>
                    
          <b-table small striped hover 
                    head-variant="dark"
                    responsive
                    caption-top
                   :fields="fields"
                   :items="items">
                <template v-slot:table-caption>
                    list of products related to this category(table)
                </template> 
                
                <template v-slot:cell(index)="data">
                    {{data.index+1}}
                </template>  

                <template v-slot:cell(action)="row">
                    <b-button size="sm" variant="outline-primary" class="my-1">
                        <b-icon-trash  variant="info" size="sm" @click="deleteR(row.item)">
                        </b-icon-trash>
                    </b-button>
                </template>
          </b-table>

        <div>
            <b-row  class="my-1">
                <b-col>productId</b-col>
                <b-col>
                    <b-row>
                        <b-col sm="3">
                            <b-input list="namevaluesId" size="5" v-model="form.productId" />
                            <b-datalist id="namevaluesId">
                                <option v-for="id in nameValues" :key="id.id" :value="id.id"></option>       
                            </b-datalist>

                        </b-col>
                        <b-col sm="9">
                            <b-input list="nameValuesName" size="10" v-model="form.productName" />
                            <b-datalist id="nameValuesName">
                                   <option v-for="name in nameValues" :key="name.name" :value="name.name"></option> 
                            </b-datalist>
                        </b-col>
                    </b-row>                    
                </b-col>
            </b-row>
            <b-row  class="my-1">
                <b-col>from date</b-col>
                <b-col>
                    <date-picker v-model="form.fromDate" type="date"></date-picker>
                </b-col>
            </b-row>
            <b-row  class="my-1">
                <b-col>to date</b-col>
                <b-col>
                    <date-picker v-model="form.toDate" type="date"></date-picker>
                </b-col>
            </b-row>
            <b-row class="my-1">
                <b-col>comment</b-col>
                <b-col>
                    <b-input v-model="form.description" type="text"/>
                </b-col>
            </b-row>                                    
        </div> 
        <b-button v-on:click="save">add product</b-button>
    </div>
</template>

<script>

import * as axios from 'axios';
import VuePersianDateTimePicker from 'vue-persian-datetime-picker'


export default {
    name:'categoriesProduct',
    props:{
          } ,
    data(){
      return {
          isBusy:false,
          errors:{},
          form:{
              productId: '' ,
              productName : '' ,
              fromDate : '' ,
              toDate : '' ,
              description : '' ,
              categoryId : '' ,
              categoryName : ''
          },
          nameValues:[],
          items:[],
          fields:[
              {key:'id',label:'شناسه'},
              {key:'productId',label:'کد کالا'},
              {key:'productName',label:'نام کالا'},
              {key:'fromDate',label:'از تاریخ'},
              {key:'toDate',label:'تا تاریخ'},
              {key:'description',label:'شرح'},
              {key:'categoryId',label:'کد دسته'},              
              {key:'categoryName',label:'نام دسته'},              
              {key:'action',label:'actions'},
          ] ,        
      }
    } ,
    methods:{
        deleteR(item){
            console.log(item);
            this.items = this.items.filter(feature=> feature.productId !== item.productId);
            this.deleteProductRelatedToThisCategory(item.categoryId,item.productId);
        },
        deleteProductRelatedToThisCategory(categoryId,productId){
                //var self = this;
                this.errors= {};
                this.isBusy = true;
                const url = `http://localhost:8080/f2f/productCategories/delete`;
                axios.get(url,{
                    params:{
                        categoryId: categoryId,
                        productId: productId
                    }
                })
                .then(function(res){
                    //self.items = res.data; 
                    console.log(res);
                })
                .catch(function(error){
                    //console.log('error load keywords....');
                    console.log(error)    ;
                });
        },
        save(){
            var self = this;
            const url = `http://localhost:8080/f2f/productCategories/save`;
            axios.post(url,self.form,
            {
            }).then((res)=>{
                    self.$store.commit("showToast","the product categories Saved....");
                    console.log(res.id);
            }).catch((err) => {
                console.log(err);
            });
        },
        listOfProductsRelatedToThisCategory(){
                var self = this;
                this.errors= {};
                this.isBusy = true;
                const url = `http://localhost:8080/f2f/productCategories/list`;
                axios.get(url,{
                    params:{
                        categoryId: "3"
                    }
                })
                .then(function(res){
                    self.items = res.data; 
                    //console.log(self.items);
                })
                .catch(function(error){
                    //console.log('error load keywords....');
                    console.log(error)    ;
                });
        },
        listOfNameValuesOfProduct(){
                var self = this;
                this.errors= {};
                this.isBusy = true;
                const url = `http://localhost:8080/f2f/products/nameValue`;
                axios.get(url,{
                    params:{
                        // categoryId: "3"
                    }
                })
                .then(function(res){
                    //self.items = res.data; 
                    //console.log(res.data);
                    self.nameValues = res.data;
                    //console.log(s);
                })
                .catch(function(error){
                    //console.log('error load keywords....');
                    console.log(error)    ;
                });
        },

    } ,
    mounted(){
        this.listOfProductsRelatedToThisCategory();
        this.listOfNameValuesOfProduct();
    }   ,
    components:{
                datePicker:VuePersianDateTimePicker
    }   
}
</script>

<style scoped>

</style>