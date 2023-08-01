<template>
    <div>

            <router-link :to="{
                        name:'createProduct',
                        params:{id:0,title:'new_prod'}
                    }">
                {{$t('PRODUCT_CREATE')}}
            </router-link>

          <b-card>
              
                  <b-table striped hover :items="searchResult" small
                           :fields="searchFields"  head-variant="dark" responsive caption-top  
                           :busy="isBusy"
                           >

                           <template v-slot:table-caption>search results</template>   
                           <template v-slot:table-busy>
                                 <div class="text-center text-danger my-2">
                                    <b-spinner class="align-middle"></b-spinner>
                                    <strong>loading</strong>
                                 </div>  
                           </template>

                           <template v-slot:cell(name)="data">                               
                                    <router-link :to="{
                                                        name:'product',
                                                        params:{id:Number(data.item.id),title:data.item.name}
                                                      }">
                                          show detail of product      
                                    </router-link>
                           </template>

                           <template v-slot:cell(editp)="data">                               
                                    <router-link :to="{
                                                        name:'createProduct',
                                                        params:{id:Number(data.item.id),title:data.item.name}
                                                      }">
                                          edit product      
                                    </router-link>
                           </template>

                           <template v-slot:cell(title)="data">                               
                                {{data.name}} 
                           </template>

                           <template v-slot:cell(comment)="data">
                               {{data.comment}}
                           </template>

                           <template v-slot:cell(index)="data">
                                   {{data.index+1}}
                           </template>                           

                  </b-table>                
          </b-card>
    </div>
</template>

<script>


import axios from 'axios'

export default {
    name:'findProduct',
    props:{
          } ,
    data(){
      return {
        id:'',
        name:'',
        title:'',
        productType:'',
        description:'',
        productDimension:'',
        isBusy:false,
        errors:{},
        searchResult:[],    
        searchFields:[
              {key:'id',label:'شناسه'},
              {key:'name',label:'نام'},
              {key:'title',label:'عنوان'},
              {key:'comment',label:'شرح'},
              {key:'editp',label:'ویرایش کالا'}
        ],            
      }
    } ,
    methods:{
        onSearchResult() {                
                var self = this;
                this.errors= {};
                this.isBusy = true;
                axios({
                    method:'GET',
                    url:'/products/list',
                })
                .then(function(res){
                      self.searchResult = res.data; 
                      self.isBusy=false;
                })
                .catch(function(error){
                    console.log(error)    ;
                });
          }
    }      ,
    mounted(){
        this.onSearchResult();
    }
}
</script>

<style scoped>

</style>