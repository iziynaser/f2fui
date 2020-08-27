<template>
    <div>
        <b-container fluid>
            <b-row  class="my-1">
                <b-col sm="3">
                    <label>lookup content id</label> 
                </b-col>
                <b-col sm="9">
                    <b-form-input  size="sm" type="text"></b-form-input> 
                </b-col>
            </b-row>
            <b-row  class="my-1">
                <b-col sm="3">
                    <label>product categroy type</label> 
                </b-col>
                <b-col sm="9">
                    <b-form-input  size="sm" type="text"></b-form-input> 
                product_category_type: image, video,header, footer , description, keyword, url,
                </b-col>
            </b-row>
            <!-- <b-row  class="my-1">
                <b-col sm="3">
                    <label>from date</label> 
                </b-col>
                <b-col sm="9">
                    <b-form-input  size="sm" type="text"></b-form-input> 
                </b-col>
            </b-row> -->
            <!-- <b-row  class="my-1">
                <b-col sm="3">
                    <label>to date</label> 
                </b-col>
                <b-col sm="9">
                    <b-form-input  size="sm" type="text"></b-form-input> 
                </b-col>
            </b-row>
            <b-row  class="my-1">
                <b-col sm="3">
                    <label>use days limit</label> 
                </b-col>
                <b-col sm="9">
                    <b-form-input  size="sm" type="text"></b-form-input> 
                </b-col>
            </b-row> -->
            <b-row  class="my-1">
                <b-col sm="3">
                    <label>{{$t('categories_purchaceFdate')}}</label> 
                </b-col>
                <b-col sm="9">
                    <b-form-input  size="sm" type="text"></b-form-input> 
                </b-col>
            </b-row>

            <b-row  class="my-1">
                <b-col sm="3">
                    <label>{{$t('categories_purchaceTdate')}}</label> 
                </b-col>
                <b-col sm="9">
                    <b-form-input  size="sm" type="text"></b-form-input> 
                </b-col>
            </b-row>
        </b-container>                          
    </div>
</template>

<script>
export default {
    name:'categoriesContent',
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