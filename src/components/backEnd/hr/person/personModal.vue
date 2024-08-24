<template>
    <div>
        <b-modal :ref="id" :id="id" v-model="show" :title="title" :header-bg-variant="headerBgVariant"
            :header-text-variant="headerTextVariant" :body-bg-variant="bodyBgVariant" :body-text-variant="bodyTextVariant"
            :footer-bg-variant="footerBgVariant" :footer-text-variant="footerTextVariant">
            <b-container fluid>
                <b-row>
                    <employee :id="id" @items="lkdata" @bClicked="setIndexes" />
                </b-row>
            </b-container>

            <template #modal-footer>
                <div class="w-100">
                    <b-button variant="primary" size="sm" class="float-right" @click="closeModalForm">
                        Close
                    </b-button>
                </div>
            </template>
        </b-modal>
    </div>
</template>

<script>
import employee from './employee.vue';

export default {
    name: "personModal",
    props: {
        title: String,
        id: String
    },
    components: {
        employee
    },
    methods: {
        closeModalForm() {
            this.$bvModal.hide(this.id);
        },
        setIndexes(selectedItems) {
            if (selectedItems.length > 0) {
                this.lkdata[0] = selectedItems[0].id;
                this.lkdata[1] = selectedItems[0].firstName + " " + selectedItems[0].lastName;
                this.$emit('bClicked', this.lkdata);
            }
        }
    }, data() {
        return {
            lkdata: [],
            items: [],
            show: false,
            variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
            headerTextVariant: 'light',
            headerBgVariant: 'secondary',
            bodyBgVariant: 'light',
            bodyTextVariant: 'dark',
            footerBgVariant: 'secondary',
            footerTextVariant: 'dark',
            errors: {},
            fields: [
                { key: "id", label: 'id' },
                { key: "firstName", label: 'firstName' },
                { key: "lastName", label: 'lastName' },
                { key: "personCode", label: 'personCode' }
            ],
        }
    },
}
</script>

<style scoped></style>