<template>
    <div>
        qa
              <b-card no-body>
                  <b-tabs pills card>
                        <b-tab title="content">
                            <qaContent/>
                        </b-tab>
                       <b-tab title="create public qa">
                           pqa
                       </b-tab>
                        <b-tab title="search">
                            product id
                            <br/>
                            fromdate
                            <br/>
                            to date
                            <br/>
                            status : not replyed , replyed
                            <br/>
                            type : question , reply
                            <br/>
                            whos question
                            <br/>
                            whos replied
                            <br/>
                               action : see detail 
                               action : approve qa
                               action : approve answer
                               action :  dcline qa
                               action : decline aswer
                               action : delete
                               action : change status to ...                                
                               action : edit
                               action : freez for ...
                               action : disable for ...
                               action : enable for ... 

                        </b-tab>
                        <b-tab title="public qa">
                                categories public qa
                                <br/>
                        </b-tab>
                        <b-tab title="approve qa">

                        </b-tab>
                  </b-tabs>
              </b-card>
    </div>
</template>

<script>

import qaContent from './qaContent'

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
        qaContent
    }
}
</script>

<style scoped>

</style>