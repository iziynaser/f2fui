<template>
    <div>

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
                                    {{data.item.name}} 
                           </template>

                           <template v-slot:cell(rate)="data">
                               {{data.item.rate}}
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
    name:'skillType',
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
              {key:'rate',label:'درجه مهارت'},
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
                    url:'http://localhost:8080/f2f/skillType/list',
                    params:{
                        'access_token' : localStorage.getItem('access_token')                            
                    }
                })
                .then(function(res){
                      self.searchResult = res.data; 
                      console.log(res.data);
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