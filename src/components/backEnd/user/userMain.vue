<template>
    <div>
          user main
              <b-card no-body>
                  <b-tabs pills card>
                        <b-tab title="user main">
                            <userList/>
                        </b-tab>
                  </b-tabs>
              </b-card>
    </div>
</template>

<script>

import userList from './userList'

export default {
    name:'userMain',
    props:{
          } ,
    data(){
      return {
        
      }
    } ,
    methods:{

    },
    components:{
        userList
    }
}
</script>

<style scoped>

</style>