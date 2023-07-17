<template>
  <div id="app" class="app-wrapper">
      <HeaderSite/>   
        <main class="container" role="main">
          <toast :show="toast.show" :text="toast.text" @hide-toast="hideToast"></toast>
          <router-view></router-view>      
      </main>  
      <footers/> 
  </div>
</template>

<script>

import footers from './components/footers'

import HeaderSite from './front/HeaderSite.vue'
import toast from './components/Toast'

export default {
  name: 'App',
  components: {
    HeaderSite,
    footers,
    toast,
},
  computed:{
        toast(){
          return this.$store.getters.toast;
        }
  },
  methods:{
      hideToast(){
        this.$store.commit("hideToast");
      }
  },
  data () {
    return {
      //
    }
  }
}

</script>

<style scoped>
  .app-wrapper{
    margin-top: 10px;
  }
</style>
