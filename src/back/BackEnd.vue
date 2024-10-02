<template>
    <div>
        <div>
            <NavBars />
        </div>
        <div>
            clock , date , toast , ...
        </div>
        <div>
            <b-card no-body>
                <b-tabs pills card>
                    <b-tab title="appInfo">
                        <appInfo />
                    </b-tab>
                    <b-tab :title="this.$t('INVOICE_MTAB_findInvoice')">
                        <div>
                            <b-card no-body>
                                <b-tabs pills card vertical>
                                    <b-tab :title="this.$t('calendar')">
                                        <calendar />
                                    </b-tab>
                                    <b-tab :title="this.$t('phone')">
                                        <phone />
                                    </b-tab>
                                    <b-tab :title="this.$t('notes')">
                                        <notes />
                                    </b-tab>
                                    <b-tab :title="this.$t('links')">
                                        <links />
                                    </b-tab>
                                    <b-tab :title="this.$t('charts')">
                                        <charts />
                                    </b-tab>
                                    <b-tab :title="this.$t('softwares')">
                                        <softwares />
                                    </b-tab>
                                </b-tabs>
                            </b-card>
                        </div>
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>
  
<script>
import NavBars from '../components/navBars.vue';
import appInfo from './appInfo.vue';
import charts from '../components/portal/charts.vue';
import links from '../components/portal/links.vue';
import calendar from '../components/portal/calendar.vue';
import notes from '../components/portal/notes.vue';
import phone from '../components/portal/phone.vue';
import softwares from '../components/portal/softwares.vue';

export default {
    name: "BackEnd",
    components: {
        NavBars,
        appInfo,
        charts,
        links,
        calendar,
        notes,
        phone,
        softwares
    }
}
</script>
  
<style></style>
  