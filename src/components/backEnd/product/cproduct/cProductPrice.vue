<template>
    <div>

        <!-- <span v-if="id">id : {{id}}</span>
        and <span v-if="title">title : {{title}}</span> -->
        
          <f2fTable  :items="items" :fields="fields" caption="list of prices related to this product" /> 

          <b-container fluid>
                <b-row  class="my-1">
                    <b-col sm="3">
                        <label>priceType</label> 
                    </b-col>
                    <b-col sm="9">
                        <f2fPriceType v-model="form.priceType"  
                                                  fetchUrl="/priceType/list"
                                                  :selectOptionLabel="this.$t('C_PRICE_TYPE')"/> 
                    </b-col>
                </b-row>      
                <b-row class="my-1">
                    <b-col sm="3">{{$t('CPRODUCT_PRICE_fromDate')}}</b-col>
                    <b-col sm="9">
                         <date-picker v-model="form.fromDate" type="date"></date-picker> 
                    </b-col>
                </b-row>
                <b-row class="my-1">
                    <b-col sm="3">{{$t('CPRODUCT_PRICE_toDate')}}</b-col>
                    <b-col sm="9">
                        <date-picker v-model="form.toDate" type="date"></date-picker>
                    </b-col>
                </b-row>
                <b-row class="my-1">
                    <b-col sm="3">{{$t('CPRODUCT_PRICE_price')}}</b-col>
                    <b-col sm="9">
                        <b-form-input v-model="form.price" type="text"></b-form-input> 
                    </b-col>
                </b-row>
                <b-row class="my-1">
                    <b-col sm="3">{{$t('CPRODUCT_PRICE_currency')}}</b-col>
                    <b-col sm="9">
                        <b-form-input v-model="form.currencyType" type="text"></b-form-input> 
                    </b-col>
                </b-row>
                <b-row class="my-1">
                    <b-col sm="3">{{$t('CPRODUCT_PRICE_tax')}}</b-col>
                    <b-col sm="9">
                        <b-form-input v-model="form.tax" type="text"></b-form-input> 
                    </b-col>
                </b-row>

          </b-container>     
          <b-button v-on:click="save()" variant="primary">{{$t('CPRODUCT_PRICE_saveBtn')}}</b-button>
                   
    </div>
</template>

<script>

import * as axios from 'axios';
import f2fPriceType from '../../../base/f2fPriceType' ;
import VuePersianDateTimePicker from 'vue-persian-datetime-picker'
import f2fTable from '../../../base/f2fTable'

export default {
    name:'cProductPrice',
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
              {key:'price',label:'قیمت'},
              {key:'productPriceType',label:'قیمت گذاری'},
              {key:'currency',label:'ارز'},
          ] ,
          form:{
              priceType:0 ,
              fromDate:"" ,
              toDate:"",
              price:"",
              currencyType:"",
              tax:"",
              product:1
          }
      }
    } ,
    mounted(){
        if(this.id!==0)
            this.listOfPricesRelatedToProduct();
    },
    components:{
        f2fPriceType,
        f2fTable ,
        datePicker:VuePersianDateTimePicker
    },
    methods:{
        clear(){
            this.form.priceType="" ,
              this.form.fromDate="" ,
              this.form.toDate="",
              this.form.price="",
              this.form.currencyType="",
              this.form.tax=""
        },
        listOfPricesRelatedToProduct(){
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
        save(){
            var self = this;

            const url = `/ProductPrice/save`;
            axios.post(url,self.form,
            {
                params:{
                }
            }).then((res)=>{
                    self.$store.commit("showToast","the product price Saved....");
                    self.listOfPricesRelatedToProduct();
                    console.log(res.id);
            }).catch((err) => {
                console.log(err);
            });
        }
        },
        list(){

        }
    }
</script>

<style scoped>

</style>