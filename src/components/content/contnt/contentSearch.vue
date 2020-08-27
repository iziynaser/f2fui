<template>
    <div>
        <!-- content search -->
           <b-row>
               <b-col>
                        <b-row class="my-1">
                            <b-col>
                                {{$t('CONTENT_SEARCH_name')}}
                            </b-col>
                            <b-col>
                                <b-input type="text"/>
                            </b-col>
                        </b-row>
                        <b-row class="my-1">
                            <b-col>
                                {{$t('CONTENT_SEARCH_title')}}
                            </b-col>
                            <b-col>
                                <b-input type="text"/>
                            </b-col>
                        </b-row>
                        <b-row class="my-1">
                            <b-col>
                                {{$t('CONTENT_SEARCH_purpose')}} 
                            </b-col>
                            <b-col>
                                <b-form-select>
                                    <template v-slot:first>
                                        <b-form-select-option :value="null" disabled>select a purpose</b-form-select-option>
                                    </template>
                                <b-form-select-option value="company info">company info</b-form-select-option>
                                <b-form-select-option value="general Info">general Info</b-form-select-option>
                                <b-form-select-option value="product Info">product Info</b-form-select-option>
                                <b-form-select-option value="project Info">project Info</b-form-select-option>
                                <b-form-select-option value="sub content">sub content</b-form-select-option>
                                <b-form-select-option value="topic">topic</b-form-select-option>
                                <b-form-select-option value="feedback">feedback</b-form-select-option>
                                <b-form-select-option value="advertisement">advertisement</b-form-select-option>
                                <b-form-select-option value="main content">main content</b-form-select-option>
                                <b-form-select-option value="article">article</b-form-select-option>
                                <b-form-select-option value="comment">comment</b-form-select-option>
                                <b-form-select-option value="description">description</b-form-select-option>
                                <b-form-select-option value="ledgal info">ledgal info</b-form-select-option>
                                <b-form-select-option value="response">response</b-form-select-option>
                                <b-form-select-option value="faq">faq</b-form-select-option>
                                <b-form-select-option value="owner">owner</b-form-select-option>
                                <b-form-select-option value="user">user</b-form-select-option>
                                <b-form-select-option value="personal info">personal info</b-form-select-option>
                            </b-form-select>
                        </b-col>
          </b-row>   

          <b-row class="my-1">
              <b-col>
                    {{$t('CONTENT_SEARCH_fromDate')}}
              </b-col>
              <b-col>
                   <b-input type="date"></b-input> 
              </b-col>
          </b-row>

          <b-row class="my-1">
              <b-col>
                  {{$t('CONTENT_SEARCH_isPublic')}}
              </b-col>
              <b-col>
                  <b-form-select>
                      <b-form-select-option value="yes">yes</b-form-select-option>
                      <b-form-select-option value="no">no</b-form-select-option>
                  </b-form-select>
              </b-col>
          </b-row> 

               </b-col>
               <b-col>
                   <!-- start col2 -->
                          <b-row class="my-1">
              <b-col>
                  {{$t('CONTENT_SEARCH_status')}}
              </b-col>
              <b-col>
                  <b-button-group>
                      <b-dropdown right text="change state to">
                          <b-dropdown-item>inProgress</b-dropdown-item>
                          <b-dropdown-item>initial draft</b-dropdown-item>
                          <b-dropdown-item>revised draft</b-dropdown-item>
                          <b-dropdown-item>final draft</b-dropdown-item>
                          <b-dropdown-item>available</b-dropdown-item>
                          <b-dropdown-item>deactivated</b-dropdown-item>
                          <b-dropdown-item>published</b-dropdown-item>
                      </b-dropdown>
                  </b-button-group>
              </b-col>
          </b-row>

                  <b-row class="my-1">
                    <b-col>
                        {{$t('CONTENT_SEARCH_description')}}
                    </b-col>
                    <b-col>
                        <b-input type="text"/>
                    </b-col>
                </b-row>                              
          <b-row class="my-1">
              <b-col>
                  {{$t('CONTENT_SEARCH_seqNum')}}
              </b-col>
              <b-col>
                  <b-input type="text"/>
              </b-col>
          </b-row>    
                    <b-row>
              <b-col>
                  {{$t('CONTENT_SEARCH_toDate')}}
              </b-col>
              <b-col>
                  <b-input type="date"></b-input>
              </b-col>
          </b-row>
                <b-row class="my-1">
              <b-col>
                    {{$t('CONTENT_SEARCH_contentType')}}                                                                        
              </b-col>
              <b-col>
                   <b-form-select>
                       <b-form-select-option>error root</b-form-select-option>
                       <b-form-select-option>forum root</b-form-select-option>
                       <b-form-select-option>maintance</b-form-select-option>
                       <b-form-select-option>menu root</b-form-select-option>
                       <b-form-select-option>web page</b-form-select-option>
                       <b-form-select-option>blog root</b-form-select-option>
                       <b-form-select-option>alert</b-form-select-option>
                       <b-form-select-option>info</b-form-select-option>
                   </b-form-select>
              </b-col>
          </b-row> 

               </b-col>
            </b-row> 
          <!-- <b-row class="my-1">
              <b-col></b-col>
              <b-col>
                            content status : 
              </b-col>
          </b-row> -->
          <b-button size="sm"
                    variant="success"
                    ref="saveBtn"
                    @click="searchForm()">search</b-button>

    <b-row>
        <f2fTable :datas="datas" :fields="fields"/>
    </b-row>

    </div>
</template>

<script>

import * as axios from 'axios'
import f2fTable from '../../base/f2fTable'

export default {
    name:'contentSearch',
    components:{
        f2fTable
    },
    props:{
          } ,
    data(){
      return {
        datas: Object,
           fields:[
               {key:'id',label:'شناسه'},
               {key:'code',label:'کد'},
               {key:'title',label:'عنوان'},
               {key:'name',label:'نام'},
               {key:'seq',label:'ترتیب'},
               {key:'description',label:'شرح'},
               {key:'purpose',label:'هدف انتشار'},
               {key:'contentType',label:'نوع محتوا'},
           ] ,
    form:{
        }
      }
    } ,
    methods:{
        searchForm(){
            var self = this;
            const url = "http://localhost:8080/f2f/content/search" ;
            axios.post(url,self.form)
                 .then((res) => {
                    //console.log(res);
                    self.datas = res.data ;
                    //console.log(self.datas);
                 })
                 .catch((err) => {
                        console.log(err);
                 })         

        }
    }      
}
</script>

<style scoped>

</style>