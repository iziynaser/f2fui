<template>
    <div>
        qa
              <b-card no-body>
                  <b-tabs pills card>
                        <b-tab title="create public qa">
                            <qaContent/>
                        </b-tab>
                        <b-tab title="search">
                            <qaSearch/>
                        </b-tab>
                        <b-tab title="public qa">
                                <publicQa/>
                                <br/>
                        </b-tab>
                  </b-tabs>
              </b-card>
    </div>
</template>

<script>

import qaContent from './qaContent'
import qaSearch from './qaSearch'
import publicQa from './publicQa'

export default {
    name:'qaMain',
    props:{
          } ,
    data(){
      return {
        
      }
    } ,
    methods:{

    },
    components:{
        qaContent,
        qaSearch ,
        publicQa
    }
}
</script>

<style scoped>

</style>