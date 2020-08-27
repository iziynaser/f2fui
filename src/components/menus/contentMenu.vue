<template>
    <div>
      <b-nav-item-dropdown :text="$t('CONTENT_SITE')" right>

          <b-dropdown-item href="#" >
              <router-link to="/createContent">{{$t('CONTENT_webSite')}}</router-link>
          </b-dropdown-item>

          <b-dropdown-item href="#" >
              <router-link to="/surveyMain">{{$t('CONTENT_survey')}}</router-link>
          </b-dropdown-item>

          <b-dropdown-item href="#" >
              <router-link to="/forumMain">{{$t('CONTENT_forum')}}</router-link>
          </b-dropdown-item>

          <b-dropdown-item href="#" >
              <router-link to="/qaMain">{{$t('C_WEB_QA')}}</router-link>
          </b-dropdown-item>

          <b-dropdown-item href="#" >
              <router-link to="/blogMain">{{$t('CONTENT_blog')}}</router-link>
          </b-dropdown-item>

          <b-dropdown-item href="#" >
              <router-link to="/contentMain">{{$t('CONTENT_content')}}</router-link>
          </b-dropdown-item>

          <b-dropdown-item href="#" >
              <router-link to="/articleMain">Article</router-link>
          </b-dropdown-item>

          <b-dropdown-item href="#" >
              <router-link to="/humanres">{{$t('CONTENT_contentSetup')}} </router-link>
          </b-dropdown-item>

          <!-- <b-dropdown-item href="#" >
              <router-link to="/humanres">{{$t('CONTENT_datasourceSetup')}} </router-link>
          </b-dropdown-item> -->

        </b-nav-item-dropdown>
    </div>
</template>

<script>
export default {
    name:'contentMenu',
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