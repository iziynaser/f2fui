<template>
    <div>
        <b-container fluid>

            <div v-if="errors.length">
                <b>please correct this error(s):</b>
                <ul>
                    <li v-bind="error in errors">{{ error }}</li>
                </ul>
            </div>

            <b-form @submit="onSubmit" @reset="onReset" v-if="visible">

                <b-row class="my-1">
                    <b-col sm="3">resume id</b-col>
                    <b-col sm="9">
                        <b-form-select v-model="form.title" :options="form.titleoptions" />
                    </b-col>
                </b-row>

                <b-row class="my-1">
                    <b-col sm="3">content id</b-col>
                    <b-col sm="9">
                        <b-form-input id="name" v-model="form.name" required placeholder="enter your name" />
                    </b-col>
                </b-row>

                <b-row class="my-1">
                    <b-col sm="3">person id </b-col>
                    <b-col sm="9">
                        <b-form-input id="lastname" v-model="form.lastname" required placeholder="enter your lastname" />
                    </b-col>
                </b-row>

                <b-row>
                    <b-col sm="3">resume date</b-col>
                    <b-col sm="9">
                        <b-form-input id="address" v-model="form.address" required placeholder="enter your adress" />
                    </b-col>
                </b-row>

                <b-row>
                    <b-col sm="3">resume text</b-col>
                    <b-col sm="9">
                        <b-form-input id="address" v-model="form.address" required placeholder="enter your adress" />
                    </b-col>
                </b-row>
                <b-row>
                    <b-col sm="11"><b-button type="submit" variant="primary">submit</b-button></b-col>
                </b-row>
            </b-form>

        </b-container>
    </div>
</template>

<script>



export default {
    name: 'resume',
    props: {

    },
    data() {
        return {
            visible: true,
            errors: [],
            form: {}
        }
    },
    methods: {
        validateForm: function (event) {
            console.log(event);
        },
        onSubmit: function (event) {
            console.log(event);
        },
        onReset: function (event) {
            console.log(event);
        }
    },
    components: {

    }
}
</script>

<style scoped></style>