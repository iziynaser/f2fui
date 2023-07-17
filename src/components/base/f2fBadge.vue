<template>
    <div>
        {{name}}
        <b-badge variant="primary" pill>{{count}}</b-badge>          
    </div>
</template>

<script>
export default {
    name:'f2fBadge',
    props:{
        name:{
            required : true,
            type: String
        },
        address:{
            required : true,
            type: String
        },
        count:{
            required : true ,
            type: String
        }
          } ,
    data(){
      return {
        //count: 0
      }
    } ,
    methods:{

    }      
}
</script>

<style scoped>

</style>