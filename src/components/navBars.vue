<template>
  <div>
    <!-- <Logo/> -->

    <!-- main menu -->
    <b-navbar toggleable="sm" type="dark" variant="dark">

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <categoriesMenu />

          <orderMenu />

          <portalMenu />

          <humanResMenu />

          <accountingMenu />

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


          <!-- <b-nav-item-dropdown text="CONTENT" right>
            <b-dropdown-item href="#">
              <router-link to="/contentC">Content</router-link>
            </b-dropdown-item>
          </b-nav-item-dropdown> -->

          <reportMenu />

          <userMenu />

          <customMenus />

          <cmsMenu />

          <catalogMenu />

          <contentMenu />

          <langMenu />

          <!-- <div class="dropdown">
          <button class="btn btn-outline-info dropdown-toggle" 
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-toggle="dropdown"
                  type="button" 
                  id="catButton" >cat
          </button>
        </div>
        <div class="dropdown-menu">
            <a class="dropddown-item">c1</a>
            <a  class="dropddown-item">c2</a>
            <a  class="dropddown-item">c3</a>            
        </div> -->

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div style="margin-top:20px;"></div>
  </div>
</template>

<script>

import categoriesMenu from './categories/categoriesMenu'
import orderMenu from './menus/orderMenu'
import portalMenu from './menus/portalMenu'
import humanResMenu from './menus/humanResMenu'
import catalogMenu from './menus/catalogMenu'
import langMenu from './menus/langMenu'
import contentMenu from './menus/contentMenu'
import accountingMenu from './menus/accountingMenu'
import reportMenu from './menus/reportMenu'
import customMenus from './menus/customMenus'
import userMenu from './menus/userMenu'
import cmsMenu from './menus/cmsMenu'

import { baseUrl } from '../api/util'
// import Logo from '../front/Logo.vue'

export default {
  name: 'navBars',
  components: {
    categoriesMenu,
    orderMenu,
    portalMenu,
    humanResMenu,
    catalogMenu,
    langMenu,
    contentMenu,
    accountingMenu,
    reportMenu,
    customMenus,
    userMenu,
    cmsMenu,
    // Logo
  },
  methods: {
    urlI(u) {
      return baseUrl(u)
    }

  }
}
</script>