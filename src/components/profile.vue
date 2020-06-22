<template>
  <div>
      <div>

        


        <b-button v-b-toggle.personalInfo>personalInfo</b-button>
        <b-collapse id="personalInfo">
          <b-card>
              <b-card-header>personal information</b-card-header>
              <b-card-body>
                  <b-form>
                    <b-form-group>
                      <b-row>
                        <b-col class="col-2">email</b-col>
                        <b-col class="col-4">
                          <b-form-input id="email" v-model="emailAddress.email" placeholder="enter an valid email"/>
                        </b-col>
                      </b-row>
                    </b-form-group>
                    <b-form-group>
                                  <f2fInvoiceType :labell="this.$t('PROFILE_emailType')" 
                                                  fetchUrl="http://localhost:8080/f2f/InvoiceType/list"
                                                  :selectOptionLabel="this.$t('PROFILE_selectEmailType')"/>
                    </b-form-group>
                    <b-form-group>
                      <b-button variant="success" @click="addNewEmailAddressToUser" >save</b-button>
                    </b-form-group>
                  </b-form>
              </b-card-body>
          </b-card>          
      </b-collapse>



        <b-button v-b-toggle.personalInfo>Email address</b-button>
        <b-collapse id="personalInfo">
          <b-card>
              <b-card-header>list of email address</b-card-header>
              <b-card-body>
                  <b-form>
                    <b-form-group>
                      <b-row>
                        <b-col class="col-2">email</b-col>
                        <b-col class="col-4">
                          <b-form-input id="email" v-model="emailAddress.email" placeholder="enter an valid email"/>
                        </b-col>
                      </b-row>
                    </b-form-group>
                    <b-form-group>
                                  <f2fInvoiceType :labell="this.$t('PROFILE_emailType')" 
                                                  fetchUrl="http://localhost:8080/f2f/InvoiceType/list"
                                                  :selectOptionLabel="this.$t('PROFILE_selectEmailType')"/>
                    </b-form-group>
                    <b-form-group>
                      <b-button variant="success" @click="addNewEmailAddressToUser" >save</b-button>
                    </b-form-group>
                  </b-form>
              </b-card-body>
          </b-card>          
      </b-collapse>

        <b-button v-b-toggle.loginHistory>login history</b-button>
        <b-collapse id="loginHistory">
          <b-card>
              <b-card-header>list of last logins </b-card-header>
              <b-card-body>  
                
                <loginHistory/>
                
              </b-card-body>
          </b-card>          
      </b-collapse>

        <b-button v-b-toggle.loginHistory>breif personal information</b-button>
        <b-collapse id="loginHistory">
          <b-card>
              <b-card-header>breif personal information </b-card-header>
              <div >
                <b-row>
                  <b-col>{{$t('PROFILE_PERSONAL_INFO_nickName')}}</b-col>
                  <b-col>{{personalInfo.nickName}}</b-col>
                  <b-col>{{$t('PROFILE_PERSONAL_INFO_mobile')}}</b-col>
                  <b-col>{{personalInfo.mobile}}</b-col>
                </b-row>
                <b-row>
                  <b-col>{{$t('PROFILE_PERSONAL_INFO_email')}}</b-col>
                  <b-col>{{personalInfo.email}}</b-col>
                  <b-col>{{$t('PROFILE_PERSONAL_INFO_city')}}</b-col>
                  <b-col>{{personalInfo.city}}</b-col>
                </b-row>
                <b-row>
                  <b-col>{{$t('PROFILE_PERSONAL_INFO_birthday')}}</b-col>
                  <b-col>{{personalInfo.birthday}}</b-col>
                  <b-col>{{$t('PROFILE_PERSONAL_INFO_gender')}}</b-col>
                  <b-col>{{personalInfo.gender}}</b-col>
                </b-row>
                <b-row>
                  <b-col>{{$t('PROFILE_PERSONAL_INFO_username')}}</b-col>
                  <b-col>{{personalInfo.username}}</b-col>
                  <b-col>{{$t('PROFILE_PERSONAL_INFO_province')}}</b-col>
                  <b-col>{{personalInfo.province}}</b-col>
                </b-row>
                <b-row>
                  <b-col>{{$t('PROFILE_PERSONAL_INFO_address')}}</b-col>
                  <b-col>{{personalInfo.address}}</b-col>
                </b-row>
              </div>
          </b-card>          
      </b-collapse>

        <b-button v-b-toggle.loginHistory>authority information</b-button>
        <b-collapse id="loginHistory">
          <b-card>
              <b-card-header>authority information </b-card-header>
              <b-list-group v-for="authority in userAuthorities" :key="authority">
                <b-list-group-item>{{authority}}</b-list-group-item>
              </b-list-group>   
          </b-card>          
      </b-collapse>


      </div>

  </div>  
</template>

<script>

import axios from 'axios'
import loginHistory from './loginHistory'

  export default {
      name:'profile',
      data(){
        return{
          visible:true,
          errors:[],
          userAuthorities:[],
          nickName:'',          
          emailAddress:{
            emailType:'',
            email:'',
            personId:''
          },
          personalInfo:{
            birthday: '' ,
            address: '',
            gender: '',
            province: '',
            city: '',
            nickName: '',
            mobile: '',
            email: '',
            username: '',
          },
        isDebugEnabled: true,
        globalErrorMessage:''
        }          
      },
      methods:{
        addNewEmailAddressToUser:function(){
          const token = window.localStorage.getItem('access_token');
          let vx = {
                     address:"eeeee@test.com",
                     fullName:"naser iziy",
                     addressType:{
                        id:"1",
                        name:"personal adress type",
                        description:"this is personal adress type"
                     },
                     access_token: token
                  };

              axios({
                method:'POST',
                url:'http://localhost:8080/f2f/emailAdress/create',
                data: JSON.stringify(vx),
                params: vx,
                headers:{ 
                  'Authorization': 'Bearer ' + token ,
                  'Content-Type' : 'application/json'
                },
                withCredentials:true,
                json:true,
                crossorigin:true
              })
              .then(function (response) {
                console.log(response);
          }).catch(function (error) {              
              console.log(error);              
        }) ;

           // axios.post('http://localhost:8080/f2f/emailAdress/create',vx,{headers: {Authorization:"Bearer "+token}})

        },
          doUserProfile:function(){ 
            let self = this;
              axios({
                method:'GET',
                url:'http://localhost:8080/f2f/userProfile',
                params:{
                     'access_token' : localStorage.getItem('access_token')
                  },
                withCredentials:true
              })
              .then(function (response) {
                self.personalInfo.birthday = response.data.birthday
                self.personalInfo.address = response.data.address
                self.personalInfo.gender = response.data.gender
                self.personalInfo.province = response.data.province
                self.personalInfo.city = response.data.city
                self.personalInfo.nickName = response.data.nickName
                self.personalInfo.mobile = response.data.mobile
                self.personalInfo.email = response.data.email
                self.personalInfo.username = response.data.username
          }).catch(function (error) {              
              console.log(error);              
        }) ;
      } ,
        doGetAuthorities:function(){
              let self = this;
              axios({
                method:'GET',
                url:'http://localhost:8080/user/me',
                params:{
                     'access_token' : localStorage.getItem('access_token')
                  },
                withCredentials:true
              })
              .then(function (response) {
                self.userAuthorities = response.data.authorities;
                self.nickName = response.data.nickName;
          }).catch(function (error) {              
              console.log(error);              
        }) ;          
        },
        
  },
  mounted(){
    this.doUserProfile();
    this.doGetAuthorities();
  },
  components:{
    loginHistory
  }
      
      }
</script>
