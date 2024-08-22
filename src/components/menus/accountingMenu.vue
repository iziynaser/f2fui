<template>
    <div>
        <b-nav-item-dropdown :text="$t('ACCOUNTING_SITE')" right>

            <b-dropdown-item href="#">
                <router-link to="/invoice">{{ $t('ACCOUNTING_invoices') }}</router-link>
            </b-dropdown-item>

            <b-dropdown-item>
                <router-link to="/createPayment">createPayment</router-link>
            </b-dropdown-item>

            <b-dropdown-item href="#">
                <router-link to="/humanres">{{ $t('ACCOUNTING_paymentGroups') }}</router-link>
            </b-dropdown-item>

            <b-dropdown-item href="#">
                <router-link to="/humanres">{{ $t('ACCOUNTING_transaction') }}</router-link>
            </b-dropdown-item>

            <b-dropdown-item href="#">
                <router-link to="/humanres">{{ $t('ACCOUNTING_billingAccount') }}</router-link>
            </b-dropdown-item>

            <b-dropdown-item href="#">
                <router-link to="/FinAccountMain">{{ $t('ACCOUNTING_financialAccount') }}</router-link>
            </b-dropdown-item>

            <b-dropdown-item href="#">
                <router-link to="/humanres">{{ $t('ACCOUNTING_aggreement') }}</router-link>
            </b-dropdown-item>

            <b-dropdown-item href="#">
                <router-link to="/humanres">{{ $t('ACCOUNTING_fixedAssets') }}</router-link>
            </b-dropdown-item>

            <b-dropdown-item href="#">
                <router-link to="/humanres">{{ $t('ACCOUNTING_budget') }}</router-link>
            </b-dropdown-item>

        </b-nav-item-dropdown>

    </div>
</template>

<script>

// import createPayment from '../backEnd/payment/createPayment.vue';

export default {
    name: 'accountingMenu',
    props: {
    },
    data() {
        return {

        }
    },
    methods: {

    },
    components: {
        // createPayment
    }
}
</script>

<style scoped></style>