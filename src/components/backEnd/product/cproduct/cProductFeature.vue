<template>
    <div>
                         <!-- <span v-if="id">id : {{id}}</span>
                 and <span v-if="title">title : {{title}}</span> -->

        <b-button v-on:click="save">{{$t('C_PRODUCT_FEATURE_SAVE_FINAL')}}</b-button>
        <f2fTree v-model="form.treeData" v-on:selectedRootEvent="handleTreeData" /> 
    </div>
</template>

<script>

import f2fTree from '../../../base/f2fTree'
import {mapGetters} from 'vuex'
import * as axios from 'axios'

export default {
    name:'cProductFeature',
    props:{
            id:Number,
            title:String
          } ,
    data(){
      return {
          form:{
              productId:this.id,
              treeData : {}
          }
      } 
    },
        components:{
        f2fTree
    },
    methods:{
        ...mapGetters(['getProductId']),
        saveFeature(){
            let self = this;
                                            
            let productId = self.getProductId();
            console.log('product id is'+ productId);
        },
        handleTreeData(e){
            this.form.treeData= e;
            //console.log('parent:'+ this.form);
        },
        save(){
            var self = this;
            const headers = new Headers();
            const access_token=localStorage.getItem('access_token');
            headers.append('Authorization','Bearer '+ access_token);
            headers.append('Accept','application/json');

            const url = `http://localhost:8080/f2f/productFeatureGroup/save`;
            axios.post(url,self.form,
            {
                headers:{
                    "Authorization":"Bearer bbbbbb"
                },
                params:{
                    "access_token":access_token
                }
            })
                        .then((res)=>{
                            if(res.data.id)
                                self.setProductId(res.data.id);
                        })
                        .catch((err) => {
                            console.log(err);
                        });
        },
        load(){
            var self = this;
            const url = `http://localhost:8080/f2f/productFeatureGroup/load`;
            axios.get(url,{
                params:{
                    productId: self.id
                }
            })
                .then(function(res){
                    //self.searchResult = res.data;
                    //self.loadKeyowrds();
                    self.form.treeData = res.data;
                    console.log(self.form.treeData); 
                })
                .catch(function(error){
                    //console.log('error load features....');
                    console.log(error)    ;
                });
        }
    },created(){
        //console.log('befor load tree');
        this.load();
        //console.log('after load tree');
    }    
}
</script>

<style scoped>

</style>