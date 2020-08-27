<template>
    <div>
              <b-card no-body>
                  <b-tabs pills card>

                        <b-tab :title="this.$t('CONTENT_MAIN_search')">
                            <contentSearch/>
                        </b-tab> 

                        <b-tab :title="this.$t('CONTENT_MAIN_base')">
                            <contentCreate/>
                        </b-tab>
                        <b-tab :title="this.$t('CONTENT_MAIN_editor')">
                            <contentEditor/>
                        </b-tab>
                        <b-tab :title="this.$t('CONTENT_MAIN_menus')">
                            <contentMenus/>
                        </b-tab>

                        <b-tab :title="this.$t('CONTENT_MAIN_category')">
                            <contentCategories/>
                        </b-tab>

                        <b-tab :title="this.$t('CONTENT_MAIN_tags')">
                            <contentTags/>    
                        </b-tab>

                        <b-tab :title="this.$t('CONTENT_MAIN_seo')">
                        </b-tab>
                        <b-tab title="users">
                            <contentUsers/>                     
                        </b-tab>
                  </b-tabs>
              </b-card>
    </div>
</template>

<script>

import contentEditor from './contentEditor'
import contentCreate from './contentCreate'
import contentTags from './contentTags'
import contentCategories from './contentCategories'
import contentMenus from './contentMenus'
import contentSearch from './contentSearch'
import contentUsers from './contentUsers'

export default {
    name:'contentMain',
    props:{
          } ,
    data(){
      return {
        
      }
    } ,
    methods:{

    },
    components:{
        contentEditor ,
        contentCreate ,
        contentTags ,
        contentCategories ,
        contentMenus ,
        contentSearch ,
        contentUsers
    }
}
</script>

<style scoped>

</style>