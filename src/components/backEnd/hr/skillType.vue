<template>
    <div>
          <b-card>
                  <f2fTable :items="searchResult" :fields="searchFields" caption="search results" :busy="isBusy" />
          </b-card>
    </div>
</template>

<script>


import axios from 'axios'
import f2fTable from '../../base/f2fTable'

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
    },
    components:{
        f2fTable
    }
}
</script>

<style scoped>

</style>