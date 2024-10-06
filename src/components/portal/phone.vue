<template>
    <div>
        <b-container fluid>
            <b-card>
                <b-collapse id="searchCollapse" visible @hide="hideCollapse" @show="showCollapse">
                    dfgsdfgsdfg
                </b-collapse>
            </b-card>
            <b-card>
                <b-card>
                    <b-row class="my-1">phone book</b-row>
                    <b-row class="my-1">

                        <b-col sm="9">
                            <!-- <label for="sfield">enter the name , family , group , role , ... </label>
                            <b-form-input id="sfield" v-model="sfield" size="sm" type="text"></b-form-input> -->
                        </b-col>
                        <b-col sm="3"><b-button>search</b-button></b-col>
                    </b-row>
                </b-card>
                <f2fTable :searchResult="searchResult" :searchFields="searchFields" :busy="isBusy"
                    :caption="this.$t('searchResults')" />
            </b-card>
        </b-container>
    </div>
</template>

<script>

import axios from 'axios'
import f2fTable from '../base/f2fTable'

export default {
    name: 'phone',
    props: {
    },
    data() {
        return {
                    isBusy: false,
            iconName: 'caret-down',
            searchResult: [],
            searchFields: [
                { key: "id", label: 'id' },
                { key: "pic", label: 'pic' },
                { key: "firstName", label: 'firstNamr' },
                { key: "lastName", label: 'lastName' },
                { key: "group", label: 'group' },
                { key: "role", label: 'role' },
                { key: "company", label: 'company' },
                { key: "semat", label: 'semat' },
                { key: "+", label: '+' },
            ],
        }
    },
    components: {
        f2fTable,
    },
    methods: {
        hideCollapse() {
            this.iconName = 'caret-right';
        },
        showCollapse() {
            this.iconName = 'caret-down';
        },
        onSearchResult() {
            var self = this;
            this.errors = {};
            this.isBusy = true;
            axios({
                method: 'GET',
                url: '/persons/list',
            })
                .then(function (res) {
                    self.searchResult = res.data;
                    self.isBusy = false;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    mounted() {
        this.onSearchResult();
    }
}
</script>

<style scoped></style>