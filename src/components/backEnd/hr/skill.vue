<template>
    <div>
        skills

    </div>
</template>

<script>

import pdate from '../../../components/pdate'

export default {
    name:'skill',
    props:{

          } ,
    data(){
      return {
          visible: true,
          errors:[],
            form:{}
      }
    } ,
    methods:{
        validateForm:function(event){

        },
        onSubmit:function(event) {            
        },
        onReset:function(event){
        }
    },
    components:{
        pdate
    }
}
</script>

<style scoped>


</style>