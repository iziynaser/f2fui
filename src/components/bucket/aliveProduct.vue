<template>
    <div class="p-2 my-2 border">
          <b-form-checkbox v-model="checked" name="checkButton" switch>
              {{label}}
          </b-form-checkbox>
    </div>
</template>

<script>
export default {
    name:'aliveProduct',
    props:{
          } ,
    data(){
      return {
        checked: false,
        label: 'just avaliable product'
      }
    } ,
    methods:{

    }      
}
</script>

<style scoped>

</style>