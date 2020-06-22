<template>
    <div>
        <div>
            <b-row>
                   <b-col>
                       <h5>
                       <p class="font-weight-bolder ">
                           <!-- {{title}} -->
                           register new comment description
                       </p>
                       </h5>
                    </b-col> 
            </b-row>
            <b-row>
                    <b-col>
                        <h6>
                        <p class="font-weight-italic ">{{desciption}}</p>
                        </h6>
                    </b-col> 
            </b-row>
        </div>
        <div>
            <vue-editor v-model="content"  :editorToolbar="customToolbar" ref="content" @text-change="contentChanged()"></vue-editor>        
        </div> 
    </div>
</template>

<script>

import { VueEditor } from 'vue2-editor'

export default {
    name:'rEditor',
    props:{
            title :{
                type:String,
                default: "sdfsdfdsdsfs"
            },
            desciption:{
                type:String,
                default: "dfsdfsf"
            },
            editorContent:{type:String}
          } ,
    data(){
      return {
          hasPreview : true,
          content : "enter your text here" ,
          customToolbar : [
            //   ["bold","italic","underline","strike"],
              [{list:"ordered"},
              {list:"bullet"},
                            {align:"center"},
                            {align:"justify"},
                            {align:"right"},
                            // {color:[]}
                          ]]          
      }
    } ,
    methods:{
        contentChanged(){
            this.$emit("editorContentChanged",this.content);
        },
        clear(){
            this.content = '';
        }
    },
    components:{
        VueEditor
    },
    mounted(){
        this.title = this.$t('REDITOR_TITLE');
        this.desciption = this.$t('REDITOR_DESCRIPTION');
    },
    // beforeDestroy(){

    // }
}
</script>

<style scoped>

</style>