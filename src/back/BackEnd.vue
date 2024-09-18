<template>
    <div>
        <div>
            <NavBars />
        </div>
        <div>
            <b-card no-body>
                <b-tabs pills card vertical>
                    <b-tab title="appInfo">
                        <appInfo />
                    </b-tab>
                    <b-tab title="calendar">
                        sdfsdfsdfsdf
                    </b-tab>
                    <b-tab title="phone">
                        sdfsdfsdfsdf
                    </b-tab>
                    <b-tab title="notes">
                        sdfsdfsdfsdf
                    </b-tab>
                    <b-tab title="links">
                        sdfsdfsdfsdf
                    </b-tab>
                    <b-tab title="charts">
                        sdfsdfsdfsdf
                    </b-tab>
                    <b-tab title="softwares">
                        sdfsdfsdfsdf
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>
  
<script>
import NavBars from '../components/navBars.vue';
import appInfo from './appInfo.vue';

export default {
    name: "BackEnd",
    components: {
        NavBars,
        appInfo
    }
}
</script>
  
<style></style>
  