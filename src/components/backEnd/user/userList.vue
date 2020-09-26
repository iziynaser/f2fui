<template>
    <div>
           <f2fTable :items="items"  :fields="fields" caption="mm" @buttonTableClicked="buttonTableClicked" />                  
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
        ],            
      } 
    },
    methods:{
        buttonTableClicked(index){
            console.log('on parent called:'+ index);
        },
    },
    components:{
        f2fTable
    } ,   
}
</script>

<style scoped>

</style>