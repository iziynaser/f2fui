<template>
<div>
    <span>search:</span><input type="text" placeholder="search a person" v-on:input="filter"/>
        <div v-for="person in persons" :key="person.id" v-bind:value="person.id">
            <div>
                <img :src="person.img"/>
                <h3 @click="gotoDetail()">{{person.title}},{{person.name}}</h3>
            </div>    
        </div>
</div>

</template>

<script>

export default {    
    name:'aboutUs' ,
    data(){
        return {
            textInput:'',
            persons:[
                {
                    name:'iziy',
                    img:'../../img/iziy.jpg',
                    title:'naser',
                    id:17566
                },
            ]
        }
    },
    methods:{
        gotoDetail:function(){
            this.$router.push({name:'details',params:{pid:1}})
        },        
        filter:function(event){
            this.textInput = event.target.value
        },
    }
}


</script>

<style scoped>

</style>
