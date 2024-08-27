<template>
  <div>
    <b-nav-item-dropdown :text="$t('HR_SITE')" right>
      <b-dropdown-item href="#">
        <router-link to="/contact">{{ $t('contact') }}</router-link>
      </b-dropdown-item>

      <b-dropdown-item href="#">
        <router-link to="/humanres">{{ $t('HR_humanRes') }}</router-link>
      </b-dropdown-item>

      <b-dropdown-item href="#">
        <router-link to="/employees">{{ $t('HR_employees') }}</router-link>
      </b-dropdown-item>

      <b-dropdown-item href="#">
        <router-link to="/humanres">{{ $t('HR_employment') }}</router-link>
      </b-dropdown-item>

      <b-dropdown-item href="#">
        <router-link to="/humanres">{{ $t('HR_employeePosition') }}</router-link>
      </b-dropdown-item>

      <b-dropdown-item href="#">
        <router-link to="/skillType">{{ $t('HR_skills') }}</router-link>
      </b-dropdown-item>

      <b-dropdown-item href="#">
        <router-link to="/humanres">{{ $t('HR_training') }}</router-link>
      </b-dropdown-item>

      <b-dropdown-item href="#">
        <router-link to="/humanres">{{ $t('HR_resume') }}</router-link>
      </b-dropdown-item>

      <b-dropdown-item href="#">
        <router-link to="/humanres">{{ $t('HR_leave') }}</router-link>
      </b-dropdown-item>

      <b-dropdown-item href="#">
        <router-link to="/humanres">{{ $t('HR_globalHrSetting') }}</router-link>
      </b-dropdown-item>

    </b-nav-item-dropdown>

  </div>
</template>

<script>
export default {
  name: 'humanResMenu',
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