<template>
    <div>

      <!-- params: {{this.$route.params.id}},{{this.$route.params.title}} -->
      props : {{id}},{{title}} 

      <div class="containser">
        <div class="row">
            
            <div class="col-sm">              
              <sImages  :thumbnailImages="thumbnailArrayImages"
                        :productImages="productArrayImages"/>
            </div>

            <span class="border"/>

            <div class="col-sm">
              {{$t('PRODUCT_INTRO')}}

              <div>
                <b-list-group horizontal>
                  <b-list-group-item>
                    comments
                    <b-badge variant="success" pill>20</b-badge>
                  </b-list-group-item>

                  <b-list-group-item>
                     sales 
                    <b-badge variant="primary" pill>10</b-badge>
                  </b-list-group-item>
                </b-list-group>                
              </div>

              <div class="clearfix">
                {{$t('PRODUCT_AVAL_COLORS')}}:                
                <b-button pill variant="outline" size="sm" style="background-color:blue" >blue</b-button>
              </div>  

              <div>
                <b-row>
                  <b-col>brand : pakshoo</b-col>
                  <b-col>category : cleaning tools</b-col>
                </b-row>
              </div>

              <div>
                     {{$t('PRODUCT_SUMMARY_FEATURES')}}
                     <ul class="list-group list-group-flush">
                         <li class="list-group-item"> sdfsdfsdfsf</li>
                         <li class="list-group-item"> sdfsdfsdfsf</li>
                         <li class="list-group-item"> sdfsdfsdfsf</li>
                         <li class="list-group-item"> sdfsdfsdfsf</li>
                     </ul> 
              </div>

            </div>

            <span class="border"/>

            <div class="col-sm">
                    <b-list-group>
                      <b-list-group-item>sales</b-list-group-item>
                      <b-list-group-item>
                          {{$t('PRODUCT_PRICE')}} 
                      </b-list-group-item>
                      <b-list-group-item>
                          available on warehouse
                      </b-list-group-item>
                      <b-list-group-item>
                        <b-row>
                          <b-col>
                            <p class="h4">
                              <b-icon-envelope  variant="info"></b-icon-envelope>
                            </p>
                          </b-col>
                          <b-col>
                            <p class="h4">  
                                <b-icon-alarm  variant="info"></b-icon-alarm>
                            </p>
                          </b-col>
                          <b-col>
                            <p class="h4">
                              <b-icon-square-half  variant="info"></b-icon-square-half>
                            </p>
                          </b-col>
                          <b-col>
                            <p class="h4">
                              <b-icon-graph-up  variant="info"></b-icon-graph-up>
                            </p>
                          </b-col>
                        </b-row>
                      </b-list-group-item>
                      <b-list-group-item>
                        <b-button class="btn-block" @click="addToCart()">+ {{$t('PRODUCT_ADD_TO_BUCKET')}}</b-button>
                      </b-list-group-item>
                      <b-list-group-item>
                        {{$t('PRODUCT_IS_PRICE_GOOD')}} {{$t('PRODUCT_YES')}} / {{$t('PRODUCT_NO')}}
                      </b-list-group-item>
                    </b-list-group> 
            </div>
        </div>
      </div>
      

      <div class="p-2 m-2 container">
        <productAttribute/>

        <div class="row">                    
          <div class="card border-success mb-3">
            <div class="card-header">
              {{$t('PRODUCT_LIST_OTHER_SELLER')}}
            </div>
            <div class="card-body"> 
                <otherSellers/>
            </div>                
          </div>
        </div>
      </div>


      <div class="card border-success mb-3">
        <div class="card-header">{{$t('PRODUCT_RELATED_PRODUCT')}}</div>
        <div class="card-body"> 
            <similarProduct/>
        </div>                
      </div>

      <div class="container">
        <b-card no-body>
          <b-tabs content-class="m-4" card>

          <b-tab :title="this.$t('PRODUCT_comments')">
                      <comment :id="Number(id)"/>
          </b-tab>

          <b-tab :title="this.$t('PRODUCT_features')">
             <productFeature :id="Number(id)"/>
          </b-tab>

          <b-tab :title="this.$t('PRODUCT_REVIEW')">
                      <contentC/>
          </b-tab>

          <b-tab :title="this.$t('PRODUCT_quesAndAns')">
                      quesAndAns
                      <!-- <rEditor/> -->
                      <qAndA/>
          </b-tab>

        </b-tabs>

        </b-card>
      </div>
    </div>
</template>

<script>


import sImages from './sImages'
//import rEditor from './rEditor'
import qAndA from './qAndA'
import similarProduct from './similarProduct'
//import comment from './comment'
import comment from './comment/comment'
import otherSellers from './otherSellers'
import productAttribute from './productAttribute'
import productFeature from './productFeature'
import {loadListOfImages} from './file-upload.service'

import contentC from '../../content/contnt/contentC'

export default {
    name:'product',
    props:{
            id:Number,
            title:String
          } ,
    components:{
      sImages,
      //rEditor,
      qAndA,
      similarProduct,
      comment,
      otherSellers,
      productAttribute,
      productFeature ,
      contentC
    },
    data(){
      return {
        numberOfStars:'',
        numberOfViewsOfUsers:'',
        numberOfComments:'',
        brand:'',
        category:'',
        availableColors:'',
        topFeatures:'',
        thumbNamilImages:'',
        LargeImages:'',      
        searchResult:[],      

        groupIds:[],
        groupIdsWithNames:[],
        itemIds:[],
        itemIdsWithNames:[],
        itemsIds:[],

        //carousel
        thumbnailArrayImages:[],
        productArrayImages:[],

      }
    } ,
    methods:{
          addToCart(){
            this.$store.dispatch("addToCart",this.id);            
          },
          showThumbnailImages(){
            if(this.id!==0)
              loadListOfImages(this.id,"small")
                .then(x=>{
                  this.thumbnailArrayImages = [].concat(x);
                }).catch((err) => {
                  console.log(err);
                })
          },
          showMediumImages(){
            if(this.id!==0)
             loadListOfImages(this.id,"medium")
                .then(x=>{
                  this.productArrayImages = [].concat(x);
                }).catch((err) => {
                  console.log(err);
                })
          }
    }      ,
    mounted(){
        this.showThumbnailImages();
        this.showMediumImages();
    }
}
</script>

<style scoped>

</style>