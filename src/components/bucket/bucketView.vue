<template>
    <div>
          <aliveProduct/>
          <b-button to="/delivery">
            select delivery
          </b-button>
          <yesNo/>
          <filteri/>
          <f2fRange/>
    </div>
</template>

<script>

import aliveProduct from './aliveProduct'
import yesNo from './yesNo'
import filteri from './filteri'
import f2fRange from './f2fRange'

export default {
    name:'bucketView',
    props:{
          } ,
    data(){
      return {
        
      }
    } ,
    methods:{

    },
    components:{
      aliveProduct,
      yesNo,
      filteri,
      f2fRange
    }

}
</script>

<style scoped>

</style>