<template>
    <div>
                            <b-container fluid>
                                  <b-row  class="my-1">
                                      <b-col sm="3">
                                           <label>{{$t('C_SOCIAL_LINKEDIN_ADDRESS')}}</label> 
                                      </b-col>
                                      <b-col sm="9">
                                           <b-form-input v-model="form.linkedInAddress" 
                                                         size="sm" 
                                                         type="text"></b-form-input> 
                                      </b-col>
                                  </b-row>            
                                  <b-row   class="my-1">
                                      <b-col sm="3">
                                           <label>{{$t('C_SOCIAL_APARAT_ADDRESS')}}</label> 
                                      </b-col>
                                      <b-col sm="9">
                                           <b-form-input v-model="form.aparatAddress" 
                                                         size="sm" 
                                                         type="text"></b-form-input> 
                                      </b-col>
                                  </b-row>      
                                  <b-row   class="my-1">
                                      <b-col sm="3">
                                           <label>{{$t('C_SOCIAL_INSTAGRAM_ADDESS')}}</label> 
                                      </b-col>
                                      <b-col sm="9">
                                           <b-form-input  v-model="form.aparatAddress" 
                                                          size="sm" 
                                                          type="text"></b-form-input> 
                                      </b-col>
                                  </b-row>  
                                  <b-row   class="my-1">
                                      <b-col sm="3">
                                           <label>{{$t('C_SOCAIL_TWIITER_ADDRESS')}}</label> 
                                      </b-col>
                                      <b-col sm="9">
                                           <b-form-input v-model="form.twitterAddress" 
                                                         size="sm" 
                                                         type="text"></b-form-input> 
                                      </b-col>
                                  </b-row>      
                        <b-row class="my-1">
                            <b-col>
                                <b-button size="small" variant="primary" v-on:click="saveProduct">{{$t('C_WEB_SAVE')}}</b-button>
                            </b-col>
                        </b-row>

                            </b-container>
    </div>
</template>

<script>

import * as axios from 'axios';


export default {
    name:'cwebSocial',
    components:{
      
    },
    props:{
          } ,
    data(){
      return {
          form:{
               linkedInAddress:"",
               aparatAddress:"",
               twitterAddress:"",
               instagramAddress:"" 
          }        
      }
    } ,
    methods:{
        clearForm(){
            var self = this;
            self.productId="";
            self.productCode="";
            self.internalName="";
            self.name="";
            self.comment="";
            self.isVirtual="";
            self.introDate="";
            self.releaseDate="";
            self.disContinuedDate="";
            self.brand="";
        },
        saveProduct(){
            var self = this;
            //const headers = new Headers();
            //const access_token=localStorage.getItem('access_token');
            //headers.append('Authorization','Bearer '+ access_token);
            //headers.append('Accept','application/json');

            const url = `http://localhost:8080/f2f/products/save`;
            axios.post(url,self.product)
// axios.post(url,self.product,
            // {
            //     headers:{
            //         "Authorization":"Bearer bbbbbb"
            //     },
            //     params:{
            //         "access_token":access_token
            //     }
            // })
                        .then((res)=>{
                            console.log(res);
                        })
                        .catch((err) => {
                            console.log(err);
                        });
    }
    }      
}
</script>

<style scoped>

</style>