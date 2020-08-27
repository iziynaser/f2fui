<template>
    <div>
          brands
              <b-card no-body>
                  <b-tabs pills card>
                        <b-tab :title="this.$t('CREATE_BRANDS_addRemoveBrand')">
                            <brandMain/>    
                        </b-tab>
                  </b-tabs>
              </b-card>
    </div>
</template>

<script>

import brandMain from './brandMain'

export default {
    name:'createBrands',
    props:{
          } ,
    data(){
      return {
        
      }
    } ,
    methods:{

    },
    components:{
        brandMain
    }
}
</script>

<style scoped>

</style>