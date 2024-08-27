<template>
  <div>
    <div>
      invoiceOverivew
    </div>
    <div>
      <b-button variant="link">{{ this.$t('create') }}</b-button>
      <b-button variant="link">{{ this.$t('copy') }}</b-button>
      <b-button variant="link">{{ this.$t('pdf') }}</b-button>
      <b-button variant="link">{{ this.$t('send_email') }}</b-button>
      <b-button variant="link">{{ this.$t('send_sms') }}</b-button>
      <b-button variant="link">{{ this.$t('change_status_to') }} ....</b-button>
      <b-button variant="link">save as template </b-button>
    </div>

    <b-card title="header"></b-card>
    <b-card title="status"></b-card>
    <b-card title="items"></b-card>
    <b-card title="transaction"></b-card>

  </div>
</template>

<script>
export default {
  name: 'invoiceOverview',
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