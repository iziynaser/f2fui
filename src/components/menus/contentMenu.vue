<template>
    <div>
      <b-nav-item-dropdown :text="$t('CONTENT_SITE')" right>

          <b-dropdown-item href="#" >
              <router-link to="/createContent">{{$t('CONTENT_webSite')}}</router-link>
          </b-dropdown-item>

          <b-dropdown-item href="#" >
              <router-link to="/humanres">{{$t('CONTENT_survey')}}</router-link>
          </b-dropdown-item>

          <b-dropdown-item href="#" >
              <router-link to="/humanres">{{$t('CONTENT_forum')}}</router-link>
          </b-dropdown-item>

          <b-dropdown-item href="#" >
              <router-link to="/humanres">{{$t('C_WEB_QA')}}</router-link>
          </b-dropdown-item>

          <b-dropdown-item href="#" >
              <router-link to="/humanres">{{$t('CONTENT_blog')}}</router-link>
          </b-dropdown-item>

          <b-dropdown-item href="#" >
              <router-link to="/humanres">{{$t('CONTENT_content')}}</router-link>
          </b-dropdown-item>

          <b-dropdown-item href="#" >
              <router-link to="/humanres">{{$t('CONTENT_dataSource')}}</router-link>
          </b-dropdown-item>

          <b-dropdown-item href="#" >
              <router-link to="/humanres">{{$t('CONTENT_contentSetup')}} </router-link>
          </b-dropdown-item>

          <b-dropdown-item href="#" >
              <router-link to="/humanres">{{$t('CONTENT_datasourceSetup')}} </router-link>
          </b-dropdown-item>
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