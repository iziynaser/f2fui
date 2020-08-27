<template>
    <div>
        <b-container fluid>
            <b-row  class="my-1">
                <b-col sm="3">
                    <label>{{$t('CATEGORIES_MAIN_categoryCode')}}</label> 
                </b-col>
                <b-col sm="9">
                    <b-form-input v-model="form.categoryCode" size="sm" type="text"></b-form-input> 
                </b-col>
            </b-row>            
            <b-row  class="my-1">
                <b-col sm="3">
                    <label>{{$t('CATEGORIES_MAIN_categoryName')}}</label> 
                </b-col>
                <b-col sm="9">
                    <b-form-input v-model="form.name" size="sm" type="text"></b-form-input> 
                </b-col>
            </b-row>
			<b-row   class="my-1">
                <b-col sm="3">
                    <label>{{$t('CPRODUCT_MAIN_productType')}}</label> 
                </b-col>
                <b-col sm="9">
                    <f2fInvoiceType 
                        fetchUrl="http://localhost:8080/f2f/ProductType/list"
                        :selectOptionLabel="this.$t('CPRODUCT_MAIN_productType_select')"/> 
                </b-col>
            </b-row>            
            <b-row  class="my-1">
                <b-col sm="3">
                    <label>{{$t('CATEGORIES_MAIN_categoryDesc')}}</label> 
                </b-col>
                <b-col sm="9">
                    <b-form-input v-model="form.description"  size="sm" type="text"></b-form-input> 
                </b-col>
            </b-row>
            <b-row  class="my-1">
                <b-col sm="3">
                    <label>{{$t('CATEGORIES_MAIN_parentCategory')}}</label> 
                </b-col>
                <b-col sm="9">
                    <b-form-select v-model="form.parentCategory">
                        <template v-slot:first>
                            <b-form-select-option :value="null" disabled >select a parent category code</b-form-select-option>
                        </template>
                        <b-form-select-option :value="category.id" v-for="category in categoryList" :key="category.id">
                            {{category.name}}
                        </b-form-select-option>
                    </b-form-select>
                </b-col>
            </b-row>
            <b-row class="my-1">
                <b-col>
                    <b-button size="small" variant="primary" v-on:click="save">
                        {{$t('CATEGORIES_MAIN_save')}}
                    </b-button>
                </b-col>
            </b-row>
        </b-container>          
    </div>
</template>

<script>

import * as axios from 'axios'

export default {
    name:'categoriesMain',
    props:{
    } ,
    data(){
      return {
        form:{
            name:"",
            parentCategory:"",
            description:"",
            categoryCode:"",
        },
        categoryList:[],
      }
    } ,
    methods:{
        save(){
            var self = this;
            const url = `http://localhost:8080/f2f/Category/save`;
            axios.post(url,self.form)
                 .then((res)=>{
                     console.log(res);
                    //if(res.data.id)
                    //    self.setProductId(res.data.id);
                    })
                 .catch((err) => {
                    console.log(err);
            });
        },
        loadCategories(){
                var self = this;
                const url = `http://localhost:8080/f2f/Category/list`;
                axios.get(url,{
                params:{}
            })
                .then(function(res){
                    if(res)
                        self.categoryList = res.data;
                })
                .catch(function(error){
                    console.log(error)    ;
                });
        },
    },created(){
        this.loadCategories();
    }      
}
</script>

<style scoped>

</style>