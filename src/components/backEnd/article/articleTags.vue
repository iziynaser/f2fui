<template>
    <div>
        <b-container fluid>
            <b-row class="my-1">
                <b-col sm="3">tags</b-col>
                <b-col sm="6"><b-input/></b-col>
                <b-col sm="3">+</b-col>
            </b-row>
        </b-container>
        <table>list of tags related to this</table>
    </div>
</template>

<script>
export default {
    name:'articleTags',
    props:{
          } ,
    data(){
      return {
        
      }
    } ,
    methods:{

    }      
}
</script>

<style scoped>

</style>