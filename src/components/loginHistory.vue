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
                           <template v-slot:cell(index)="data">
                                 {{data.index+1}}
                           </template>                           
                           <template v-slot:cell(device)="data">
                                 {{data.item.device.substring(1,50)}} 
                           </template>
                  </b-table>                
        </b-card>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name:'loginHistory',
    props:{
          } ,
    data(){
      return {
        errors:{},
        isBusy:false,
        searchResult:[],    
        searchFields:[
              {key:'index',label:'ردیف'},
              {key:'ip',label:'آدرس آی پی'},
              {key:'device',label:'دستگاه'},
              {key:'username',label:'نام کاربری'},
              {key:'clientId',label:'کلاینت'},
              {key:'dateCreated',label:'تاریخ'}
        ],          
      }
    } ,
    methods:{

    }   ,
    mounted(){
      var self = this;
      
      axios({
                method:'GET',
                url:'http://localhost:8080/f2f/loginHistory/',
                params:{
                     'access_token' : localStorage.getItem('access_token')
                },
                withCredentials:true
            })
              .then(function (res) {
                  self.searchResult = res.data.data; 
            }).catch(function (error) {              
                  console.log(error);              
      }) ;
    }   
}
</script>

<style scoped>

</style>