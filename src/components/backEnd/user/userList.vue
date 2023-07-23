<template>
    <div>
           <f2fTable :searchResult="items"  :searchFields="fields" caption="list of users" @rowSelected="rowSelected" />                  
    </div>
</template>

<script>

import f2fTable from '../../base/f2fTable'

export default {
    name:'userList',
    props:{
        items:[],    
    },
    data(){
      return {
        isBusy:false,
        errors:{},        
        fields:[
            {key:"id",label:'title'},
            {key:"username",label:'user name'},
            {key:"action",label:'action'},
            {key:"detailr",label:'show details'}
        ],            
      } 
    },
    methods:{
        rowSelected(item){
           this.$emit("bClicked",item);
        },
    },
    components:{
        f2fTable
    } ,   
}
</script>

<style scoped>

</style>