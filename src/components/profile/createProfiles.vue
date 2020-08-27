<template>
    <div>
          profiles
              <b-card no-body>
                  <b-tabs pills card>
                        <b-tab title="personal info">
                            <personalInfo/>                            
                        </b-tab>
                        <b-tab title="login history">
                            <loginHistory/> 
                        </b-tab>
                        <b-tab title="authorities">
                            <authorityInfo/>    
                        </b-tab>
                        <b-tab title="adress">
                            <myAddress/>
                        </b-tab>
                        <b-tab title="emails">
                            <emails/>
                        </b-tab>
                  </b-tabs>
              </b-card>
    </div>
</template>

<script>

import loginHistory from './loginHistory'
import personalInfo from './personalInfo'
import myAddress from './myAddress'
import emails from './emails'
import authorityInfo from './authorityInfo'

export default {
    name:'createProfiles',
    props:{
          } ,
    data(){
      return {
        
      }
    } ,
    methods:{

    },
    components:{
        loginHistory,
        personalInfo,
        myAddress,
        emails,
        authorityInfo
    }
}
</script>

<style scoped>

</style>