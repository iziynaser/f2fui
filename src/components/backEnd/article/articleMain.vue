<template>
    <div>
              <b-card no-body>
                  <b-tabs pills card>
                        <b-tab title="main">
                            <articleCreate/>
                        </b-tab>

                        <b-tab title="categories">
                            <articleCategories/>
                        </b-tab>

                        <b-tab title="tags">
                            <articleTags/>
                        </b-tab>

                        <b-tab title="related post">
                            <articleRelatedPost/>
                        </b-tab>

                        <b-tab title="seo">
                            <articleSeo/>
                        </b-tab>

                  </b-tabs>
              </b-card>
    </div>
</template>

<script>

import articleCategories from './articleCategories'
import articleSeo from './articleSeo'
import articleTags from './articleTags'
import articleRelatedPost from './articleRelatedPost'
import articleCreate from './articleCreate'

export default {
    name:'articleMain',
    props:{
          } ,
    data(){
      return {
        
      }
    } ,
    methods:{

    },
    components:{
        articleCategories ,
        articleSeo ,
        articleTags ,
        articleRelatedPost ,
        articleCreate
    }
}
</script>

<style scoped>

</style>