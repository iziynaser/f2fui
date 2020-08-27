<template>
    <div>
        <b-container fluid>
            <b-row class="my-1">
                <b-col sm="3">coverImage</b-col>
                <b-col sm="9">b + -</b-col>
            </b-row>
            <b-row class="my-1">
                <label>title</label>
                <b-input/>
            </b-row>
            <b-row class="my-1">
                <label>urlPath</label>
                <b-input/>
            </b-row>
            <b-row class="my-1">
                <label>content</label>
                <b-input/>
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