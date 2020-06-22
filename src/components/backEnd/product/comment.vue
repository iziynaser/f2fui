<template>
    <div>

          <div> 
            <b-row>
              <b-col>
                  overview of comments for this product
                  <div>
                    <label></label>
                    <div>label one</div>
                    <b-progress value="25" striped variant="success"></b-progress>

                    <label></label>
                    <div>label2 for ppppp</div>
                    <b-progress value="75" striped variant="info"></b-progress>

                    <label></label>
                    <div>label3 for product</div>
                    <b-progress value="35" striped variant="warning"></b-progress>

                    <label></label>
                    <div>label four fr</div>
                    <b-progress value="90" striped variant="danger"></b-progress>
                  </div>
              </b-col>
              <b-col>
                  <div>
                      {{$t('PRODUCT_COMMENT_REG_DESCR')}}
                  </div>
                  <div>    
                    
                    <b-button pill variant="danger">{{$t('PRODUCT_COMMENT_REG_A_NEW_ONE')}}</b-button>
                  </div>  
              </b-col>
            </b-row>
          </div>


          <b-input  ref="titlleComponent" v-model="title"></b-input>
          <dynaList ref="benefComponent"  :labelforList="$t('PRODUCT_COMMENT_LIST_OF_BEN')" v-on:updatelist="updateListOfBenefits($event)"/>
          <dynaList ref="upsetComponent"  :labelforList="$t('PRODUCT_COMMENT_LIST_OF_UPS')" v-on:updatelist="updateListOfUpsets($event)"/>
          <rEditor  ref="editorComponent" v-on:editorContentChanged="editorContentChanged($event)"/>
          <b-button v-on:click="saveCommentClick()">save</b-button>


          <commentL/>
    </div>
</template>

<script>

import rEditor from './rEditor'
import dynaList from './dynaList'
import commentL from './commentL'

export default {
    name:'comment',
    props:{
          } ,
    data(){
      return {
          noButtonPressesd:false,
          yesButtonPressed:false,
          title:'',
          benefits:[],
          upsets:[],
          content:'',
          comments:[]
      }
    } ,
    methods:{
      clear(){
        this.$refs.benefComponent.clear();
        this.$refs.upsetComponent.clear();
        this.$refs.editorComponent.clear();
        this.title = '';
      },
      updateListOfBenefits(benifitsArray){
          this.benefits = benifitsArray
      },
      updateListOfUpsets(upsetArray){
          this.upsets = upsetArray;
      },
      editorContentChanged(content){
        this.content = content;
      },
      saveCommentClick(){
        this.comments.push({title:this.title,benefits:this.benefits,upsets:this.upsets,content:this.content});
        this.clear();
      }
    }  ,
    components:{
      rEditor,dynaList,commentL
    }    
}
</script>

<style scoped>

</style>