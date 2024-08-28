<template>
    <div>
        <b-dropdown right class="m-2" :text="this.$t('selected')">
            <b-dropdown-item value="1">{{ this.$t('contains') }}</b-dropdown-item>
            <b-dropdown-item value="2">{{ this.$t('equals') }}</b-dropdown-item>
            <b-dropdown-item value="3">{{ this.$t('begins_with') }}</b-dropdown-item>
            <b-dropdown-item value="4">{{ this.$t('is_empty') }}</b-dropdown-item>
            <b-dropdown-item value="5">{{ this.$t('not_equal') }}</b-dropdown-item>
        </b-dropdown>
    </div>
</template>

<script>
export default {
    name: 'f2fSearchOptions',
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