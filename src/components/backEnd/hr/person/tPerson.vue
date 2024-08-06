<template>
    <div>

        <b-container fluid>
            <b-row class="my-1">
                <b-col sm="3">
                    <b-form-input id="code" v-model="code" placeholder="" />
                </b-col>
                <b-col sm="7">
                    <b-form-input id="desc" v-model="desc" placeholder="" />
                </b-col>
                <b-col sm="2">
                    <b-button variant="primary"></b-button>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>


export default {
    name: 'tPerson',
    components: {
    },
    props: {
    },
    data() {
        return {
            code: ''
            ,
            desc: ''
        }
    },
    methods: {
    },
    created() {
    },
}
</script>

<style scoped></style>