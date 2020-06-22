<template>
    <div>
                    <span v-if="id">id : {{id}}</span>
                 and <span v-if="title">title : {{title}}</span>

            <b-container fluid>
                <b-row  class="my-1">
                        <b-col sm="3">
                            <label>{{$t('CPRODUCT_CATEGORY_name')}}</label> 
                        </b-col>
                        <b-col sm="9">
                            <b-form-input type="text"></b-form-input> 
                        </b-col>
                </b-row>  
                <b-row  class="my-1">
                        <b-col sm="3">
                            <label>{{$t('CPRODUCT_CATEGORY_description')}}</label> 
                        </b-col>
                        <b-col sm="9">
                            <b-form-input type="text"></b-form-input> 
                        </b-col>
                </b-row>  
                <b-row  class="my-1">
                        <b-col sm="3">
                            <label>{{$t('CPRODUCT_CATEGORY_pic')}}</label> 
                        </b-col>
                        <b-col sm="9">
                            <b-form-input type="text"></b-form-input> 
                        </b-col>
                </b-row>  
                <b-row  class="my-1">
                        <b-col sm="3">
                            <label>{{$t('CPRODUCT_CATEGORY_parentCategory')}}</label> 
                        </b-col>
                        <b-col sm="9">
                            <b-form-input type="text"></b-form-input> 
                        </b-col>
                </b-row>  
                <fileUpload type="category" :productId=id />
            </b-container>    
    </div>
</template>

<script>

import fileUpload from '../fileUpload'

export default {
    name:'cProductCategory',
    props:{
            id:Number,
            title:String
          } ,
    data(){
      return {
        
      }
    } ,
    methods:{

    },
    components:{
        fileUpload
    }      
}
</script>

<style scoped>

</style>