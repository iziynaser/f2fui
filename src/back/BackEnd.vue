<template>
<div >
          <div>
            <NavBars />
        </div>
        <div>
            clock , date , toast , ...
        </div>
  <button @click="createTab">click to create tab</button>

   <b-card no-body>
    <b-tabs small pills card>
      <b-tab title="help desc">
      <b-card no-body>
    <b-tabs  pills small card vertical ref="tabs" v-model="tabIndex">
      <b-tab v-for="t in tabs" :key="t.id">
        <template #title>
            <b-icon icon="x" size="sm" @click="closeTab(t.id)"></b-icon>
            {{t.name}}
        </template>
        <p>
          <component :is="t.contnt"></component>
        </p>
      </b-tab>
    </b-tabs>
  </b-card>
      </b-tab>
    </b-tabs>
   </b-card>     
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
  },
    data() {
      return {
          appTabs:[],
          tabs: [
            {
              name: "appInfo" ,
                id: 0 ,
                    contnt: appInfo
            },
            {
              name: "charts" ,
                   id: 1,
                   contnt: charts
            },
                        {
              name: "links" ,
                   id: 2,
                   contnt: links
            },
                        {
              name: "calendar" ,
                   id: 3,
                   contnt: calendar
            },
                        {
              name: "notes" ,
                   id: 4,
                   contnt: notes
            },
                        {
              name: "phone" ,
                   id: 5,
                   contnt: phone
            },
                        {
              name: "softwares" ,
                   id: 6,
                   contnt: softwares
            },
          ],
        }
    },
  methods: {
    createTab() {
      let newTab = {
        id: 0 ,
        name: "t",
        contnt : "cccc"
      }
      this.tabs.push(newTab);
        console.log('createTab')
      },
        closeTab(x) {
        for (let i = 0; i < this.tabs.length; i++) {
          console.log(this.tabs[i]);
          if (this.tabs[i].id === x) {
            this.tabs.splice(i, 1)
          }
        }
      }
    }
}
</script>
  
<style></style>
  