<template>
    <div>
        <b-row  class="my-1">
            <b-col>
               <label for="question"> question </label>    
            </b-col>
            <b-col>
                <b-input id="question"/>
            </b-col>
        </b-row>
        <b-row  class="my-1">
            <b-col>
                <label for="briefanswer">brief answer</label> 
            </b-col>
            <b-col>
                <b-input id="briefanswer"/>
            </b-col>
        </b-row>
        <b-row  class="my-1">
            <b-col>
                <label for="additionalanswer">additional answer</label>
            </b-col>
            <b-col>
                <b-input id="additionalanswer"/>
            </b-col>
        </b-row>
        <b-row  class="my-1">
            <b-col></b-col>
            <b-col></b-col>
        </b-row>
        <b-row  class="my-1">
            <b-col>
                <label for="selectcategory">select category</label>                
            </b-col>
            <b-col>
                <b-input id="selectcategory"/>
            </b-col>
        </b-row>
        <b-row  class="my-1">
            <b-col>
                <label id="selectcontent">select content</label>
            </b-col>
            <b-col>
                <b-input id="selectcontent"/>
            </b-col>
        </b-row>
        <b-row class="my-1">
            <b-col>
                <label for="selectproduct"> select product</label>              
            </b-col>
            <b-col>
                <b-input id="selectproduct"/>
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