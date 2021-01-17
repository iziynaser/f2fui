<template>
    <div>
        authority information
        <b-collapse id="loginHistory">
          <b-card>
              <b-card-header>authority information </b-card-header>
              <b-list-group v-for="authority in userAuthorities" :key="authority">
                <b-list-group-item>{{authority}}</b-list-group-item>
              </b-list-group>   
          </b-card>          
      </b-collapse>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name:'authorityInfo',
    props:{
          } ,
    data(){
      return {
              userAuthorities:[],
      }
    } ,
    methods:{
        doGetAuthorities:function(){
              let self = this;
              axios({
                method:'GET',
                url:'/user/me',
                // params:{
                //      'access_token' : localStorage.getItem('access_token')
                //   },
                withCredentials:true
              })
              .then(function (response) {
                self.userAuthorities = response.data.authorities;
                self.nickName = response.data.nickName;
          }).catch(function (error) {              
              console.log(error);              
        }) ;          
        },
    },
    mounted(){
      this.doGetAuthorities();
    },      
}
</script>

<style scoped>

</style>