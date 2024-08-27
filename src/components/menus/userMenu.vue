<template>
    <div>
        <b-nav-item-dropdown :text="$t('USER_MENU')" right>
            <b-dropdown-item href="#">
                <router-link to="/userMain">{{ $t('user_main') }}</router-link>
            </b-dropdown-item>
            <b-dropdown-item>
                <router-link to="/roles">{{ $t('roles') }}</router-link>
            </b-dropdown-item>
        </b-nav-item-dropdown>
    </div>
</template>

<script>
export default {
    name: 'userMenu',
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