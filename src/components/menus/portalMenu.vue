<template>
  <div>
    <b-nav-item-dropdown :text="$t('PORTAL_SITE')" right>

      <b-dropdown-item href="#">
        <router-link to="/contact">{{ $t('PORTAL_timesheet') }}</router-link>
      </b-dropdown-item>

      <b-dropdown-item href="#">
        <router-link to="/contact">{{ $t('PORTAL_mytask') }}</router-link>
      </b-dropdown-item>

      <b-dropdown-item href="#">
        <router-link to="/contact">{{ $t('PORTAL_myleave') }}</router-link>
      </b-dropdown-item>

      <b-dropdown-item href="#">
        <router-link to="/contact">{{ $t('PORTAL_mytraining') }}</router-link>
      </b-dropdown-item>

    </b-nav-item-dropdown>
  </div>
</template>

<script>
export default {
  name: 'portalMenu',
  props: {
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped></style>