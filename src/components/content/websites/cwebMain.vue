<template>
    <div>
            <b-container fluid>
                <b-row  class="my-1">
                    <b-col sm="3">
                        <label>{{$t('c_WEB_COMPANY_NAME')}}</label> 
                    </b-col>
                    <b-col sm="9">
                        <b-form-input v-model="form.companyName" 
                            size="sm" 
                            type="text">
                        </b-form-input> 
                    </b-col>
                </b-row> 
                <b-row  class="my-1">
                    <b-col sm="3">
                        <label>{{$t('C_WEB_COMPANY_ADDRESS')}}</label> 
                    </b-col>
                    <b-col sm="9">
                        <b-form-input v-model="form.address" 
                            size="sm" 
                            type="text">
                        </b-form-input> 
                    </b-col>
                </b-row>    
                <b-row  class="my-1">
                    <b-col sm="3">
                        <label>{{$t('C_WEB_COMPANY_EMAIL')}}</label> 
                    </b-col>
                    <b-col sm="9">
                        <b-form-input v-model="form.email" 
                            size="sm" 
                            type="text">
                        </b-form-input> 
                    </b-col>
                </b-row>      
                <b-row  class="my-1">
                    <b-col sm="3">
                        <label>{{$t('C_WEB_COMPANY_FAX')}}</label> 
                    </b-col>
                    <b-col sm="9">
                        <b-form-input v-model="form.email" 
                            size="sm" 
                            type="text">
                        </b-form-input> 
                    </b-col>
                </b-row>  
                <b-row  class="my-1">
                    <b-col sm="3">
                        <label>{{$t('C_WEB_COMPANY_TEL')}}</label> 
                    </b-col>
                    <b-col sm="9">
                        <b-form-input v-model="form.email" 
                            size="sm" 
                            type="text">
                        </b-form-input> 
                    </b-col>
                </b-row>  
                <b-row  class="my-1">
                    <b-col sm="3">
                        <label>{{$t('C_WEB_COMPANY_OTHER_DES')}}</label> 
                    </b-col>
                    <b-col sm="9">
                        <b-form-input v-model="form.email" 
                            size="sm" 
                            type="text">
                        </b-form-input> 
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

export default {
    name:'cwebMain',
    components:{
       
    },
    props:{
          } ,
    data(){
      return {
          form:{
              companyName:""  ,
              address:"",
              email:""
          }
        
      }
    } ,
    methods:{

    }      
}
</script>

<style scoped>

</style>