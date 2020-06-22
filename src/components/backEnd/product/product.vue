<template>
    <div>

      <!-- params: {{this.$route.params.id}},{{this.$route.params.title}}
      props : {{id}},{{title}} -->

      <div class="containser">
        <div class="row">
            
            <div class="col-sm">              
              <sImages/>
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
                        <b-button class="btn-block">+ {{$t('PRODUCT_ADD_TO_BUCKET')}}</b-button>
                      </b-list-group-item>
                      <b-list-group-item>
                        {{$t('PRODUCT_IS_PRICE_GOOD')}} {{$t('PRODUCT_YES')}} / {{$t('PRODUCT_NO')}}
                      </b-list-group-item>
                    </b-list-group> 
            </div>
        </div>
      </div>
      

      <div class="p-2 m-2 container">
        <div class="p-2 row">
          <b-col>
             <b-button variant="outline-primary">
                <img src="http://localhost:8080/images/icon/warranti.png" class="w-25 img-rounded" @click="showProduct()"/>
             </b-button>
          </b-col>
          <b-col>
            <b-button variant="outline-primary">
                <img src="http://localhost:8080/images/icon/gift.png"      class="w-25 img-rounded" @click="showProduct()"/>  
            </b-button>    
          </b-col>
          <b-col>
            <b-button variant="outline-primary">
              <img src="http://localhost:8080/images/icon/exam.png"      class="w-25 img-rounded" @click="showProduct()"/>  
            </b-button>  
          </b-col>
          <b-col>
            <b-button variant="outline-primary">
                <img src="http://localhost:8080/images/icon/delivery.png"  class="w-25 img-rounded" @click="showProduct()"/>  
            </b-button>    
          </b-col>
          <b-col>
            <b-button variant="outline-primary">
                <img src="http://localhost:8080/images/icon/buy.png"   class="w-25 img-rounded" @click="showProduct()"/>            
            </b-button>    
          </b-col>
        </div>
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
                      <comment/>
          </b-tab>

          <b-tab :title="this.$t('PRODUCT_features')">
                      features ,
                      <div>
                        <div v-for="group in groupIdsWithNames" :key="group.id">
                            <b-container>

                              {{group.gname}}

                              <div v-if="group.gitems" class="box">

                                  <div>
                                    <b-row v-for="im in group.gitems" :key="im.id" class="text-right">                                  
                                      <b-col>  
                                        {{im.itemname}}
                                      </b-col>
                                      <b-col>
                                      <div v-if="im.itemvalues">
                                        <div>
                                          <div v-for="iin in im.itemvalues" :key="iin.id">
                                            {{iin.itemvalue}}
                                          </div>
                                        </div>
                                      </div>

                                      </b-col>  


                                    </b-row>
                                  </div> 
                              </div>
                              

                            </b-container>
                        </div>
                      </div>
          </b-tab>

          <b-tab :title="this.$t('PRODUCT_Survey')">
                      Survey ,
                      <rEditor/>
          </b-tab>

          <b-tab :title="this.$t('PRODUCT_quesAndAns')">
                      quesAndAns
                      <rEditor/>
                      <qAndA/>
          </b-tab>

        </b-tabs>

        </b-card>
      </div>
    </div>
</template>

<script>

import axios from 'axios'
import sImages from './sImages'
import rEditor from './rEditor'
import qAndA from './qAndA'
import similarProduct from './similarProduct'
import comment from './comment'
import otherSellers from './otherSellers'

export default {
    name:'product',
    props:{
            id:Number,
            title:String
          } ,
    components:{
      sImages,rEditor,qAndA,similarProduct,comment,otherSellers
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

      }
    } ,
    methods:{
          onSearchResult() {                
                var self = this;

                var groupIds = self.groupIds;
                var itemIds =  self.itemIds;
                var groupIdsWithNames = self.groupIdsWithNames;
                var idx = 0 ;

                this.errors= {};
                this.isBusy = true;
                axios({
                    method:'GET',
                    url:'http://localhost:8080/f2f/products/features',
                    params:{
                        'access_token' : localStorage.getItem('access_token')                            
                    }
                })
                .then(function(res){

                      self.searchResult = res.data; 
                      for(const feature of self.searchResult){

                        if(!groupIds.includes(feature.groupId)){
                          if(feature.groupId)
                            groupIds.push(feature.groupId);
                            groupIdsWithNames.push({gid:feature.groupId,gname:feature.groupName,gitems:[]});
                        }

                        if(!itemIds.includes(feature.itemId)){
                          if(feature.itemId){
                            itemIds.push(feature.itemId);

                            for(const [i,g] of groupIdsWithNames.entries()){
                              if(g.gid===feature.groupId){
                                  groupIdsWithNames[i].gitems.push({itemid:feature.itemId,itemname:feature.itemName,itemvalues:[]});
                                  
                                  //start of my block
                                  if(feature.itemsId){
                                    if(groupIdsWithNames[i].gitems)
                                    for(idx=0;idx<groupIdsWithNames[i].gitems.length;idx++){
                                        if(feature.itemId===groupIdsWithNames[i].gitems[idx].itemid){
                                            //console.log(idx +" , " + groupIdsWithNames[i].gitems[idx]) ;
                                            groupIdsWithNames[i].gitems[idx].itemvalues.push({itemid:feature.itemsId,itemvalue:feature.itemsName});
                                        }                                          
                                    }                                    
                                  }//end of my block
                              }                                
                            }                            
                          }                        
                        }
                        


                      }

                      //console.log(groupIdsWithNames);
                      self.isBusy=false;
                })
                .catch(function(error){
                    console.log(error)    ;
                });
          }
    }      ,
    mounted(){
        this.onSearchResult();
    }
}
</script>

<style scoped>

</style>