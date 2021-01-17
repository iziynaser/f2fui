<template>
    <div>
         <div>invoice header</div>
         <div v-if="isDebugEnabled">           
           isDebugEnabled: {{isDebugEnabled}},
           global error message :{{globalErrorMessage}},
         </div>
         <!-- <div>params: {{this.form}}</div> -->
         
                   <b-form>

                  <b-form-group>
                      <b-row>
                        <b-col  class="col-2">{{$t('INVOICE_HEADER_creatorPerson')}}</b-col>
                        <b-col  class="col-4">
                          <b-form-input id="creattor" v-model="form.creator"  readonly required :placeholder="this.$t('INVOICE_HEADER_creatorPersonPlaceHolder')" />
                        </b-col>                
                        </b-row>
                  </b-form-group>

                  <b-form-group>
                      <b-row>
                        <b-col  class="col-2">{{$t('INVOICE_HEADER_currentDate')}}</b-col>
                        <b-col  class="col-4">
                          <b-form-input id="creattor" v-model="form.creator" readonly required />
                        </b-col>                
                        </b-row>
                  </b-form-group>

                    <b-form-group>
                        <b-row>
                          <b-col class="col-2">{{$t('INVOICE_HEADER_date')}}</b-col>
                          <b-col class="col-4">
                              <pdate/>
                          </b-col>                
                        </b-row>
                     </b-form-group> 

                     <b-form-group>
                        <b-row>
                          <b-col class="col-2">{{$t('INVOICE_HEADER_title')}}</b-col>
                          <b-col class="col-4">
                              <b-form-input id="title" v-model="form.title" required="" :placeholder="this.$t('INVOICE_HEADER_titlePlaceHolder')" />
                          </b-col>                
                          <b-col class="col-2">{{$t('INVOICE_HEADER_message')}}</b-col>
                          <b-col class="col-4">
                              <b-form-input id="message" v-model="form.message" required="" :placeholder="this.$t('INVOICE_HEADER_messagePlaceHolder')" />
                          </b-col>                
                        </b-row>
                     </b-form-group>   

                  <b-form-group>
                      <b-row>
                        <b-col  class="col-2">{{$t('INVOICE_HEADER_creatorPerson')}}</b-col>
                        <b-col  class="col-4">
                          <b-form-input id="creattor" v-model="form.creator" required="" :placeholder="this.$t('INVOICE_HEADER_creatorPersonPlaceHolder')" />
                        </b-col>                
                        <b-col  class="col-2">{{$t('INVOICE_HEADER_fromPerson')}}</b-col>
                        <b-col  class="col-4">
                            <b-form-input id="fromPerson" v-model="form.fromPerson" required="" :placeholder="this.$t('INVOICE_HEADER_fromPersonPlaceHolder')" />
                        </b-col>                
                        </b-row>
                  </b-form-group>

              <b-form-group>
                              <b-row>
                <b-col class="col-2">{{$t('INVOICE_HEADER_toPerson')}}</b-col>
                <b-col class="col-4">
                  <b-form-input id="toPerson" v-model="form.toPerson" required="" :placeholder="this.$t('INVOICE_HEADER_toPersonPlaceHolder')" />
                </b-col>                
                <b-col class="col-2">{{$t('INVOICE_HEADER_invoiceType')}}</b-col>
                <b-col class="col-4">
                  <b-form-input id="invoiceType" v-model="form.invoiceType" required="" :placeholder="this.$t('INVOICE_HEADER_invoiceTypePlaceHolder')" />
                </b-col>                
               </b-row>

              </b-form-group> 

              <b-form-group>
                <b-row>
                <b-col class="col-2">{{$t('INVOICE_HEADER_description')}}</b-col>
                <b-col class="col-10">
                  <b-form-textarea id="description" v-model="form.description" required="" :placeholder="this.$t('INVOICE_HEADER_descriptionPlaceHolder')" />
                </b-col>                                
               </b-row>
              </b-form-group>
              
              <b-form-group>
                <b-button variant="success" @click="saveinvoice">{{$t('INVOICE_HEADER_save')}}</b-button>
              </b-form-group>
                

            </b-form> 
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name:'invoiceHeader',
    props:{
          } ,
    data(){
      return {
        form :{
                date:'' ,
                title:'',
                message:'' ,
                description:'' ,
                creatorPerson:1 ,
                fromPerson:1 ,
                toPerson:1 ,
                invoiceItems:[] ,
                invoiceStatuses:[] ,
                invoiceType:1 
        },
        errors:[],
        visible : true,
        isDebugEnabled: true,
        globalErrorMessage:''
      }
    } ,
    methods:{
      resetInvoice(){
            this.form.currentDate='45646';
            this.form.date='45646';
            this.form.title='';
            this.form.description='';
            this.form.creator=1;
            this.form.fromPerson=1;
            this.form.toPerson=1;
            this.form.invoiceType=1;
      },
      saveinvoice(){
        var self = this;
        axios.post('/Invoice/save',self.form).then(function (res){
          console.log(res);
        }).catch(function(err){
           console.log("err :"+err) ;
           console.log("err response:"+err.response);
           self.globalErrorMessage = err;
        });

        //this.resetInvoice();
      }
    }      
}
</script>

<style scoped>

</style>