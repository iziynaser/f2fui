<template>
    <div>
                         <!-- <span v-if="id">id : {{id}}</span>
                 and <span v-if="title">title : {{title}}</span> -->
        <div>
            create a new keyword
        </div>

        <b-table striped hover small caption-top responsive
                 head-variant="dark" :items="searchResult" :fields="searchFields" >
                 <template v-slot:table-caption>{{$t('C_PRODUCT_KEY_RELATED_KEY')}}</template>
        </b-table>

<b-container fluid>
    <b-row class="my-1">
        <b-col sm="3">{{$t('C_PRODUCT_KEY_KEYNAME')}}</b-col>
        <b-col sm="9"><b-form-input v-model="form.keyName" type="text"/></b-col>
    </b-row>
    <b-row class="my-1">
        <b-col sm="3">{{$t('C_PRODUCT_KEY_WEIGHT')}}</b-col>
        <b-col sm="9"><b-form-input v-model="form.keyWeight" type="text"/></b-col>
    </b-row>
    <b-row class="my-1">
        <b-col sm="3">{{$t('C_PRODUCT_KEY_STATUS')}}</b-col>
        <b-col sm="9"><b-form-input v-model="form.keyStatus" type="text"/></b-col>
    </b-row>
</b-container>
        
        <div>
            <b-button size="small" variant="primary" v-on:click="loadKeyowrds">{{$t('C_PRODUCT_KEY_DEL_ALL')}}</b-button>
            <b-button size="small" variant="primary" v-on:click="saveKeyword">save new keyword</b-button>
        </div>

    </div>
</template>

<script>

import * as axios from 'axios';

export default {
    name:'cProductKeyword',
    props:{
            id:Number,
            title:String
    } ,
    data(){
      return {
          form:{
              keyName:"",
              keyWeight:"",
              keyStatus:"",
              product:""
          },
          searchResult:[],    
          searchFields:[
              {key:'id',label:'شناسه'},
              {key:'keyName',label:'نام کلید'},
              {key:'keyWeight',label:'وزن کلمه'},
              {key:'keyStatus',label:'وضغیت'},
          ],
      }
    } ,
    methods:{
        clearForm(){
            var self = this.form;
            self.keyName="";
            self.keyWeight="";
            self.keyStatus="";
        },
        saveKeyword(){
               var self = this;
               const url="http://localhost:8080/f2f/productKeywords/save" ;
               self.form.product= self.id;
               axios.post(url,self.form)
                    .then((res) => {
                        self.loadKeyowrds();
                        self.clearForm();
                        console.log(res);
                    })
                    .catch((err) => {
                        console.log(err);
                    }) 
        },
        loadKeyowrds(){
            var self = this;
            const url = `http://localhost:8080/f2f/productKeywords/list`;
            axios.get(url,{
                params:{
                    productId: self.id
                }
            })
                .then(function(res){
                    self.searchResult = res.data;
                    //self.loadKeyowrds(); 
                })
                .catch(function(error){
                    console.log('error load keywords....');
                    console.log(error)    ;
                });

        }
    },
    created() {
        if(this.id!==0)
            this.loadKeyowrds();
    },     
}
</script>

<style scoped>

</style>