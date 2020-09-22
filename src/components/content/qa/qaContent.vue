<template>
    <div>
        <b-row  class="my-1">
            <b-col>question</b-col>
            <b-col>
                <b-input/>
            </b-col>
        </b-row>
        <b-row  class="my-1">
            <b-col>brief answer</b-col>
            <b-col>
                <b-input/>
            </b-col>
        </b-row>
        <b-row  class="my-1">
            <b-col>additional answer</b-col>
            <b-col>
                <b-input/>
            </b-col>
        </b-row>
        <b-row  class="my-1">
            <b-col></b-col>
            <b-col></b-col>
        </b-row>
        <b-row  class="my-1">
            <b-col>select category</b-col>
            <b-col>
                <b-input/>
            </b-col>
        </b-row>
        <b-row  class="my-1">
            <b-col>select content</b-col>
            <b-col>
                <b-input/>
            </b-col>
        </b-row>
        <b-row class="my-1">
            <b-col>select product</b-col>
            <b-col>
                <b-input/>
            </b-col>
        </b-row>                                                        
        <b-row  class="my-1">
            <b-col>status</b-col>
            <b-col>
                <b-button>approved</b-button>
                <b-button>published</b-button>
                <b-button>deactive</b-button>
                <b-button>active</b-button>
                <b-button>declined</b-button>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name:'qaContent',
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