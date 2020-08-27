<template>
    <div>
        survey
              <b-card no-body>
                  <b-tabs pills card>
                        <b-tab title="search">
                            action : activate , deactived , fixed , delete 
                        </b-tab>
                        <b-tab title="create">
                            <surveyCreate/>
                        </b-tab>
                        <b-tab title="survey">
                            delete this survey

                        </b-tab>
                  </b-tabs>
              </b-card>
    </div>
</template>

<script>

import surveyCreate from './surveyCreate'

export default {
    name:'surveyMain',
    props:{

} ,
    data(){
      return {
        
      }
    } ,
    methods:{

    },
    components:{
        surveyCreate
    }
}
</script>

<style scoped>

</style>