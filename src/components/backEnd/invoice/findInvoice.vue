<template>
      <div>
            <b-container fluid>
                  <b-card header="search options" border-variant="dark">
                        <b-button :pressed=true v-b-toggle.searchCollapse>collapse</b-button>
                        <b-collapse id="searchCollapse" visible>

                              <b-container>
                                    <label for="">invoice id</label>
                                    <select class="m-2" id="">
                                          <option selected>selected...</option>
                                          <option value="1">contains</option>
                                          <option value="2">Equals </option>
                                          <option value="3">Begins with</option>
                                          <option value="4">is empty</option>
                                          <option value="5">not equal</option>
                                    </select>

                                    <input type="text" id="invoiceId" name="invoiceId" />

                                    <input type="checkbox" name="ignoreCase" id="ignoreCase" />
                                    <label for="ignoreCase">ignoreCase</label>
                              </b-container>

                              <b-container>
                                    <label for="">description</label>
                                    <select class="m-2" id="">
                                          <option selected>selected...</option>
                                          <option value="1">contains</option>
                                          <option value="2">Equals </option>
                                          <option value="3">Begins with</option>
                                          <option value="4">is empty</option>
                                          <option value="5">not equal</option>
                                    </select>

                                    <input type="text" name="description" id="description" />

                                    <input type="checkbox" name="ignoreCase" id="ignoreCase" />
                                    <label for="ignoreCase">ignoreCase</label>
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
                                    <label for="fromDate">from Date</label>
                                    <pdate id="fromDate"></pdate>

                                    <label for="toDate">to Date</label>
                                    <pdate id="toDate"></pdate>
                              </b-form-group>

                              <b-button pill variant="success" v-on:click="onSubmit">find</b-button>

                        </b-collapse>
                  </b-card>

                  <b-card>
                        <f2fTable :searchResult="searchResult" :searchFields="searchFields" :busy="isBusy"
                              caption="search results" />
                  </b-card>
            </b-container>
      </div>
</template>

<script>

import axios from 'axios'
import f2fTable from '../../base/f2fTable'

export default {
      name: 'findInvoice',
      props: {

      },
      data: function () {
            return {
                  isBusy: false,
                  errors: {},
                  simpleArray: ['one', 'two', 'three'],

                  invoiceActionTypes: [],
                  selectedInvoiceActionTypes: [],

                  searchResult: [],
                  searchFields: [
                        { key: 'id', label: 'شناسه' },
                        { key: 'date', label: 'تاریخ' },
                        { key: 'invoice', label: 'فاکتور' },
                        { key: 'description', label: 'شرح' },
                        { key: 'creator', label: 'ایجاد کننده' },
                        { key: 'from', label: 'از' },
                        { key: 'to', label: 'به' },
                        { key: 'counts', label: 'تعداد اقلام' },
                        { key: 'status', label: 'وضعیت' },
                        { key: 'type', label: 'نوع' }
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
            f2fTable
      },
      methods: {

            onSubmit() {
                  var self = this;
                  this.errors = {};
                  this.isBusy = true;
                  axios.get('/Invoice/list')
                        .then(function (res) {
                              self.searchResult = res.data;
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