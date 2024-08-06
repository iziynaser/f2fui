<template>
    <div>
        <!-- <b-button @click="show = true" variant="primary">Show Modal</b-button> -->

        <b-modal id="personModal" v-model="show" :title="title" :header-bg-variant="headerBgVariant"
            :header-text-variant="headerTextVariant" :body-bg-variant="bodyBgVariant" :body-text-variant="bodyTextVariant"
            :footer-bg-variant="footerBgVariant" :footer-text-variant="footerTextVariant">
            <b-container fluid>
                <b-row>

                </b-row>
            </b-container>

            <template #modal-footer>
                <div class="w-100">
                    <p class="float-left">Modal Footer Content</p>
                    <b-button variant="primary" size="sm" class="float-right" @click="show = false">
                        Close
                    </b-button>
                </div>
            </template>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: "personModal",
    props: {
        title: String
    },
    data() {
        return {
            show: false,
            variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
            headerBgVariant: 'secondary',
            headerTextVariant: 'light',
            bodyBgVariant: 'light',
            bodyTextVariant: 'dark',
            footerBgVariant: 'secondary',
            footerTextVariant: 'dark'
        }
    }
}
</script>

<style scoped></style>