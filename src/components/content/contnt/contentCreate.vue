<template>
    <div>
         <!-- <b-container fluid> -->
            <!-- <b-row class="my-1">
                <b-col sm="3">{{$t('C_PRODUCT_KEY_KEYNAME')}}</b-col>
                <b-col sm="9"><b-form-input v-model="form.keyName" type="text"/>
                </b-col>
            </b-row> -->
         <!-- </b-container>                    -->

          <b-row class="my-1">
              <b-col>{{$t('CONTENT_CREATE_name')}}</b-col>
              <b-col>
                  <b-input type="text"/>
              </b-col>
          </b-row>
          <b-row class="my-1">
              <b-col>{{$t('CONTENT_CREATE_tite')}}</b-col>
              <b-col>
                  <b-input  type="text"/>
              </b-col>
          </b-row>
          <b-row class="my-1">
              <b-col>{{$t('CONTENT_CREATE_description')}}</b-col>
              <b-col>
                  <b-input type="text"/>
              </b-col>
          </b-row>                              
          <b-row class="my-1">
              <b-col>
                  {{$t('CONTENT_CREATE_seqNum')}}
              </b-col>
              <b-col>
                  <b-input type="text"/>
              </b-col>
          </b-row>          
          <b-row class="my-1">
              <b-col>
                    {{$t('CONTENT_CREATE_purpose')}} 
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
              <b-col>{{$t('CONTENT_CREATE_isPublic')}}</b-col>
              <b-col>
                  <b-form-select>
                      <b-form-select-option value="yes">yes</b-form-select-option>
                      <b-form-select-option value="no">no</b-form-select-option>
                  </b-form-select>
              </b-col>
          </b-row> 
          <b-row class="my-1">
              <b-col>
                    {{$t('CONTENT_CREATE_contentType')}}                                                                        
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
          <b-row class="my-1">
              <b-col></b-col>
              <b-col>
                    {{$t('CONTENT_CREATE_status')}} 
              </b-col>
          </b-row>
          <b-row class="my-1">
              <b-col>
                    {{$t('CONTENT_CREATE_fromDate')}}
              </b-col>
              <b-col>
                   <b-input type="date"></b-input> 
              </b-col>
          </b-row>
          <b-row>
              <b-col>
                  {{$t('CONTENT_CREATE_toDate')}}
              </b-col>
              <b-col>
                  <b-input type="date"></b-input>
              </b-col>
          </b-row>
          <b-row class="my-1">
              <b-col>
                  {{$t('CONTENT_CREATE_status')}}
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
          <b-button>
              {{$t('save')}}
           </b-button>
    </div>
</template>

<script>
export default {
    name:'contentCreate',
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