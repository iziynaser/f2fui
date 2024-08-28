<template>
      <div>
            <b-container fluid>
                  <b-card :header="this.$t('searchOptions')" border-variant="dark">
                        <b-button :pressed=true v-b-toggle.searchCollapse>
                              <b-icon :icon="iconName"></b-icon>
                        </b-button>
                        <b-collapse id="searchCollapse" visible @hide="hideCollapse" @show="showCollapse">

                              <b-container>
                                    <label for="">{{ this.$t('invoiceId') }}</label>
                                    <f2fSearchOptions />
                                    <input type="text" id="invoiceId" name="invoiceId" />

                                    <!-- <input type="checkbox" name="ignoreCase" id="ignoreCase" />
                                    <label for="ignoreCase">ignoreCase</label> -->
                              </b-container>

                              <b-container>
                                    <label for="">{{ this.$t('description') }}</label>
                                    <f2fSearchOptions />
                                    <input type="text" name="description" id="description" />

                                    <!-- <input type="checkbox" name="ignoreCase" id="ignoreCase" />
                                    <label for="ignoreCase">ignoreCase</label> -->
                              </b-container>

                              <f2fInvoiceType id="invoiceType" :labell="this.$t('INVOICE_TYPE_COMMON_select')"
                                    fetchUrl="/InvoiceType/list"
                                    :selectOptionLabel="this.$t('INVOICE_TYPE_COMMON_selectOptionLabel')" />

                              <b-form-group label="status ">
                                    <b-form-checkbox-group id="checkbox-group-0" v-model="selectedInvoiceActionTypes"
                                          name="falvor-1">
                                          <b-form-checkbox v-for="actionType in invoiceActionTypes" :key="actionType.id"
                                                :value="actionType.name">
                                                {{ actionType.name }}
                                          </b-form-checkbox>
                                    </b-form-checkbox-group>
                              </b-form-group>

                              <b-form-group>
                                    <label for="fromDate">{{ this.$t('fromDate') }}</label>
                                    <pdate id="fromDate"></pdate>

                                    <label for="toDate">{{ this.$t('toDate') }}</label>
                                    <pdate id="toDate"></pdate>
                              </b-form-group>

                              <b-button pill variant="success" v-on:click="findAvailableInvoice">find</b-button>

                        </b-collapse>
                  </b-card>

                  <b-card>
                        <f2fTable :searchResult="searchResult" :searchFields="searchFields" :busy="isBusy"
                              :caption="this.$t('searchResults')" />
                  </b-card>
            </b-container>
      </div>
</template>

<script>

import axios from 'axios'
import f2fTable from '../../base/f2fTable'
import f2fSearchOptions from '../../base/f2fSearchOptions'

export default {
      name: 'findInvoice',
      props: {

      },
      data: function () {
            return {
                  iconName: 'caret-down',
                  isBusy: false,
                  errors: {},
                  //simpleArray: ['one', 'two', 'three'],

                  invoiceActionTypes: [],
                  selectedInvoiceActionTypes: [],

                  searchResult: [],
                  searchFields: [
                        { key: 'invoiceId', label: 'شناسه' },
                        { key: 'invoiceCode', label: 'کد' },
                        { key: 'date', label: 'تاریخ' },
                        { key: 'title', label: 'عنوان' },
                        { key: 'message', label: 'شرح' },
                        { key: 'description', label: 'ایجاد کننده' },
                        { key: 'fpFirstName', label: 'از' },
                        { key: 'fpLastName', label: 'از' },
                        { key: 'tpFirstName', label: 'به' },
                        { key: 'tpLastName', label: 'به' },
                        { key: 'invoiceName', label: 'نوع' }
                  ],
                  form: {}
            };
      },
      mounted() {
            var self = this;

            axios({
                  method: 'GET',
                  url: '/InvoiceActionTypes/list',
                  withCredentials: true
            })
                  .then(function (res) {
                        self.invoiceActionTypes = res.data;
                  }).catch(function (error) {
                        console.log(error);
                  });

      },
      components: {
            f2fTable,
            f2fSearchOptions
      },
      methods: {
            hideCollapse() {
                  this.iconName = 'caret-right';
            },
            showCollapse() {
                  this.iconName = 'caret-down';
            },
            findAvailableInvoice() {
                  var self = this;
                  this.errors = {};
                  this.isBusy = true;
                  var url = '/invoice/lInvoice';
                  axios({
                        method: 'GET',
                        url: url,
                        withCredentials: false
                  })
                        .then(function (response) {
                              self.searchResult = response.data;
                              self.isBusy = false;
                        })
                        .catch(function (error) {
                              console.log(error);
                        });
            },
            onReset(e) {
                  console.log(e);
            }
      }
}
</script>

<style scoped></style>