<template>
    <div>
          create payment view
              <b-card no-body>
                  <b-tabs pills card>
                        <b-tab :title="this.$t('CPRODUCT_CREATE_main')">
                            <cProductMain/>
                        </b-tab>
                        <b-tab :title="this.$t('CPRODUCT_CREATE_content')">
                             <cProductContent/> 
                        </b-tab>
                        <b-tab :title="this.$t('CPRODUCT_CREATE_features')">
                            <cProductFeature/>
                        </b-tab> 
                  </b-tabs>
              </b-card>
    </div>
</template>

<script>

import cProductMain from './cproduct/cProductMain'
import cProductContent from './cproduct/cProductContent'
import cProductFeature from './cproduct/cProductFeature'

export default {
    name:'createPayment',
    props:{
          } ,
    data(){
      return {
        
      }
    } ,
    methods:{

    },
    components:{
        cProductMain,
        cProductContent,
        cProductFeature,        
    }
}
</script>

<style scoped>

</style>