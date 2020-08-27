<template>
    <div>
                  <b-nav-item-dropdown :text="$t('CATALOG_SITE')" right>

          <b-dropdown-item href="#" >
              <router-link to="/cProductBase">{{$t('CATALOG_SETTING')}}</router-link>
          </b-dropdown-item>

          <b-dropdown-item href="#" >
              <router-link to="/createCategories">{{$t('CATALOG_categories')}}</router-link>
          </b-dropdown-item>

          <b-dropdown-item href="#" >
              <router-link to="/findProduct">{{$t('CATALOG_products')}}</router-link>
          </b-dropdown-item>

          <b-dropdown-item href="#" >
              <router-link to="/createBrands">{{$t('CATALOG_brands')}}</router-link>
          </b-dropdown-item>


          <!-- <b-dropdown-item href="#" >
              <router-link to="/humanres">{{$t('CATALOG_features')}}</router-link>
          </b-dropdown-item> -->

          <!-- <b-dropdown-item href="#" >
              <router-link to="/createPromotion">{{$t('CATALOG_promos')}}</router-link>
          </b-dropdown-item> -->

          <!-- <b-dropdown-item href="#" >
              <router-link to="/humanres">{{$t('CATALOG_priceRules')}}</router-link>
          </b-dropdown-item> -->

          <!-- <b-dropdown-item href="#" >
              <router-link to="/humanres">{{$t('CATALOG_stores')}}</router-link>
          </b-dropdown-item> -->

          <!-- <b-dropdown-item href="#" >
              <router-link to="/humanres">{{$t('CATALOG_shipping')}}</router-link>
          </b-dropdown-item> -->

          <!-- <b-dropdown-item href="#" >
              <router-link to="/humanres">{{$t('CATALOG_imageManagement')}}</router-link>
          </b-dropdown-item> -->

          <b-dropdown-item href="#" >
              <router-link to="/createCatalog">{{$t('CATALOG_TITLE')}}</router-link>
          </b-dropdown-item>

        </b-nav-item-dropdown>

    </div>
</template>

<script>
export default {
    name:'catalogMenu',
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