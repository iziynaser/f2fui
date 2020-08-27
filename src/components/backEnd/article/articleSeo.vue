<template>
    <div>
        <b-container fluid>
            <b-row class="my-1">
                <label>title</label>
                <b-col sm="6"><b-input/></b-col>
            </b-row>
            <b-row>
                <label>description</label>
                <b-textarea></b-textarea>
            </b-row>
            <b-row>
                <label>keywords</label>
                <b-textarea></b-textarea>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name:'articleSeo',
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