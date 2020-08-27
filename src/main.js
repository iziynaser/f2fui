import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue,BootstrapVueIcons} from 'bootstrap-vue'
//import {BootstrapVue,BootstrapVueIcons, ToastPlugin} from 'bootstrap-vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueI18Next from '@panter/vue-i18next';

import i18next from 'i18next';

import axios from 'axios' ;

import VueAxios from 'vue-axios' ;

import pdate from './components/pdate' ;
import enJson from './locales/en' ;
import faJson from './locales/fa' ;
import f2fInvoiceType from './components/base/f2fInvoiceType';
//import toast from './components/Toast'

//general axios call
//import f2fApi from './f2fApi' ;

//test interceptor
import interceptorSetup from './interceptors'

//test default persian align and trl
import { f2fChangeLocale } from './f2fUtils';

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueI18Next);

//new setting 2
//axios.defaults.baseURL='http://localhost:8080/f2f/'
//end of new setting 2

//new setting
axios.interceptors.request.use(
  function(config){
    config.headers.authorization = localStorage.getItem('access_token');
    //config.params['access_token']=  localStorage.getItem('access_token');
    config.params = {...config.params, access_token: localStorage.access_token}
    //console.log('config:'+ config);
    return config;
  },
);

axios.interceptors.response.use(
  function(response){
    return response;
  },function(error){
    
    if(error.message.includes('Network Error')) {
      store.commit("showToast",i18next.t('TOKEN_EXPIRED_ERR'));
      router.push('/login')
    }
    else if(error.response.data){
      if(error.response.data.status==400)
          store.commit("showToast","Bad Request...400.");
      else if(error.response.data.status==401)
          store.commit("showToast","Bad Request...401.");
      else if(error.response.data.status==404)
          store.commit("showToast","Bad Request...404.");
      
      if(error.response.status==400 && error.response.data.error==="invalid_grant")
            store.commit("showToast","username and password do not match");

          console.log("error:"+error.response.data.error);// = "Bad Request"
          console.log("message:"+error.response.data.message);
          console.log("path:"+error.response.data.path);
          console.log("status:"+error.response.data.status);
          console.log("trace:"+error.response.data.trace);				
          
    }        
    //throw new Error("invalid token detected"+ error)
  }
  );
//end of new setting

Vue.use(VueAxios,axios)

//use customize components
Vue.component('pdate',pdate);
Vue.component('f2fInvoiceType',f2fInvoiceType);

//use toast for showing messages
//Vue.component('toast',toast)

//interceptor
interceptorSetup()

i18next.init({
   lng:'fa',
   fallbackLng:'fa',
   whitelist:['en','fa'],
   debug:true,
   resources:{
     en : enJson,
     fa:faJson
   }
},(err,t)=>{
    if(err)
      return console.log('something went wrong loading',err);
    t('key');
});
const i18n = new VueI18Next(i18next);


//call here for persian and trl align
f2fChangeLocale('fa');


new Vue({
  router,
  store,
  i18n:i18n,
  //axios:axios,
  render: h => h(App)
}).$mount('#app')

