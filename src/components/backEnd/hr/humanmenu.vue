<template>
    <div>
      <b-card no-body>
            <b-tabs id="tabs" pills card v-model="step">
              <b-tab :title="this.$t('hr_menu_main')">
                <p>hrmain</p>
              </b-tab>
              <b-tab :title="this.$t('hr_menu_employee')">
                employee
              </b-tab>
              <b-tab :title="this.$t('hr_menu_employment')">
                employment
              </b-tab>
              <b-tab :title="this.$t('hr_menu_employPosition')">
                employeePosition
              </b-tab>
              <b-tab :title="this.$t('hr_menu_skills')">
                skills
              </b-tab>
              <b-tab :title="this.$t('hr_menu_training')">
                training
              </b-tab>
              <b-tab :title="this.$t('hr_menu_resume')">
                resumes
              </b-tab>
              <b-tab :title="this.$t('hr_menu_leave')">
                leave
              </b-tab>
            </b-tabs>
      </b-card>
    </div>

</template>

<script>

// import training from  './training'
// import personinsert from  './personinsert'

export default {
    name:'humanmenu',
    props:{
          } ,
    data(){
      return {
        step:0,
      }
    } ,
    methods:{

    } ,
    components:{
      // training,personinsert
    }
}
</script>

<style scoped>


</style>