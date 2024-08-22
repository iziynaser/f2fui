<template>
    <!-- <div> -->

    <b-container fluid>
        <b-row align-h="start" align-v="stretch" class="my-1">
            <b-col sm="3">
                <b-form-input id="code" v-model="lkdata[0]" :placeholder="placeHolderCode" />
            </b-col>
            <b-col sm="7">
                <b-form-input id="desc" v-model="lkdata[1]" :placeholder="placeHolderValue" />
            </b-col>
            <b-col sm="1">
                <b-button variant="primary" @click="showModalForm">
                    <b-icon icon="text-center"></b-icon>
                </b-button>
            </b-col>
        </b-row>
    </b-container>
    <!-- </div> -->
</template>

<script>


export default {
    name: 'tPerson',
    components: {
    },
    props: {
        modalFormName: String,
        lkdata: [],
        placeHolderCode: String,
        placeHolderValue: String
    },
    data() {
        return {
            //lkdata: [],
            // code: ''
            // ,
            // desc: ''
        }
    },
    methods: {
        showModalForm() {
            //console.log("property modalFormName is =" + this.modalFormName);
            this.$bvModal.show(this.modalFormName);
        },
    },
    created() {
    },
}
</script>

<style scoped></style>