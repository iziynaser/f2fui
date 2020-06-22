<template>
<div>
      <router-link left to="/">
        <b-img left src="http://localhost:8080/images/logo/logo.png" ></b-img> 
      </router-link>
    
  <!-- main menu -->
  <b-navbar toggleable="sm" type="dark" variant="dark" >

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        
        <categoriesMenu/>

        <!-- <orderMenu/> -->

        <!-- <portalMenu/> -->

        <!-- <humanResMenu/> -->

        <accountingMenu/>

        <!-- <b-nav-item-dropdown :text="$t('PARTY_SITE')" right>
          <b-dropdown-item href="#" >
              <router-link to="/humanres">WebSite</router-link>
          </b-dropdown-item>
        </b-nav-item-dropdown> -->

        <!-- <b-nav-item-dropdown :text="$t('POS_SITE')" right>
          <b-dropdown-item href="#" >
              <router-link to="/humanres">WebSite</router-link>
          </b-dropdown-item>
        </b-nav-item-dropdown> -->

        <!-- <reportMenu/> -->

        <catalogMenu/>

        <!-- <contentMenu/> -->
        
        <langMenu/>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <div style="margin-top:20px;"></div>
</div>
</template>

<script>

import categoriesMenu from './categories/categoriesMenu'
// import orderMenu from  './menus/orderMenu'
// import portalMenu from './menus/portalMenu'
// import humanResMenu from './menus/humanResMenu'
import catalogMenu from './menus/catalogMenu'
import langMenu from './menus/langMenu'
// import contentMenu from './menus/contentMenu'
import accountingMenu from './menus/accountingMenu'
// import reportMenu from './menus/reportMenu'

export default {
      name:'navBars',
      components:{
        categoriesMenu,
        // orderMenu,
        // portalMenu,
        // humanResMenu,
        catalogMenu,
        langMenu,
        // contentMenu,
        accountingMenu,
        // reportMenu
      },
      methods:{
         
      }
    }
</script>