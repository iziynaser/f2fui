<template>
    <div>
        <b-container fluid>
            <b-row class="my-1">
                <b-col sm="3">coverImage</b-col>
                <b-col sm="9">b + -</b-col>
            </b-row>
            <b-row class="my-1">
                <label for="title">title</label>
                <b-input id="title"/>
            </b-row>
            <b-row class="my-1">
                <label id="urlPath">urlPath</label>
                <b-input id="urlPath"/>
            </b-row>
            <b-row class="my-1">
                <label id="content">content</label>
                <b-input id="content"/>
            </b-row>
            <b-row class="my-1">
                <b-button>savebtn</b-button>
                <b-button>assign to</b-button>
                <b-button>draft</b-button>
                <b-button>previe</b-button>
                <b-button>publish</b-button>
            </b-row>
        </b-container>                    
    </div>
</template>

<script>
export default {
    name:'articleCreate',
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