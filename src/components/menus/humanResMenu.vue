<template>
  <div>
    <b-nav-item-dropdown :text="$t('HR_SITE')" right>
      <b-dropdown-item href="#">
        <!-- <router-link to="/contact">{{ $t('contact') }}</router-link> -->
          <b-button size="sm" variant="link" @click="createHrTabs(0,'contact')">{{ $t('contact') }}</b-button>
      </b-dropdown-item>

      <b-dropdown-item href="#">
        <!-- <router-link to="/humanres">{{ $t('HR_humanRes') }}</router-link> -->
          <b-button  size="sm" variant="link" @click="createHrTabs(1,'humanres')">{{ $t('HR_humanRes') }}</b-button>
      </b-dropdown-item>

      <b-dropdown-item href="#">
        <!-- <router-link to="/employees">{{ $t('HR_employees') }}</router-link> -->
          <b-button  size="sm" variant="link" @click="createHrTabs(2,'employees')">{{ $t('HR_employees') }}</b-button>
      </b-dropdown-item>

      <b-dropdown-item href="#">
        <!-- <router-link to="/humanres">{{ $t('HR_employment') }}</router-link> -->
          <b-button  size="sm" variant="link" @click="createHrTabs(3,'employment')">{{ $t('HR_employment') }}</b-button>
      </b-dropdown-item>

      <b-dropdown-item href="#">
        <!-- <router-link to="/humanres">{{ $t('HR_employeePosition') }}</router-link> -->
          <b-button  size="sm" variant="link" @click="createHrTabs(4,'employee position')">{{ $t('HR_employeePosition') }}</b-button>
      </b-dropdown-item>

      <b-dropdown-item href="#">
        <!-- <router-link to="/skillType">{{ $t('HR_skills') }}</router-link> -->
          <b-button  size="sm" variant="link" @click="createHrTabs(5,'skills')">{{ $t('HR_skills') }}</b-button>
      </b-dropdown-item>

      <b-dropdown-item href="#">
        <!-- <router-link to="/humanres">{{ $t('HR_training') }}</router-link> -->
          <b-button  size="sm" variant="link" @click="createHrTabs(6,'training')">{{ $t('HR_training') }}</b-button>
      </b-dropdown-item>

      <b-dropdown-item href="#">
        <!-- <router-link to="/humanres">{{ $t('HR_resume') }}</router-link> -->
          <b-button  size="sm" variant="link" @click="createHrTabs(7,'resume')">{{ $t('HR_resume') }}</b-button>
      </b-dropdown-item>

      <b-dropdown-item href="#">
        <!-- <router-link to="/humanres">{{ $t('HR_leave') }}</router-link> -->
          <b-button  size="sm" variant="link" @click="createHrTabs(8,'leave')">{{ $t('HR_leave') }}</b-button>
      </b-dropdown-item>

      <b-dropdown-item href="#">
        <!-- <router-link to="/humanres">{{ $t('HR_globalHrSetting') }}</router-link> -->
         <b-button  size="sm" variant="link" @click="createHrTabs(9,'hr setting')">{{ $t('HR_globalHrSetting') }}</b-button>
      </b-dropdown-item>

    </b-nav-item-dropdown>

  </div>
</template>

<script>
import hrsetting from '../backEnd/hr/hrsetting.vue';
import leave from '../backEnd/hr/leave.vue';
import resume from '../backEnd/hr/resume.vue';
import training from '../backEnd/hr/training.vue';
import skillType from '../backEnd/hr/skillType.vue';
import employeePosition from '../backEnd/hr/employeePosition.vue';
import employment from '../backEnd/hr/employment.vue';
import employees from '../backEnd/hr/employees.vue';
import humanres from '../backEnd/hr/humanres.vue';
import contact from '../backEnd/hr/contact.vue';

export default {
  name: 'humanResMenu',
  props: {
  },
  data() {
    return {
      cp: [
            hrsetting, 
            leave ,
            resume ,
            training , 
            skillType ,
            employeePosition , 
            employment ,
            employees ,
            humanres ,
            contact ]
    }
  },
  methods: {
    createHrTabs(idParam, nameParam) {
      let atab = {
        id: idParam ,
        name: nameParam,
        content : this.cp[idParam]
      }
      atab.id = atab.id + 10;
      console.log(atab);
      this.$emit('createAppTab',atab);
    }
  }
}
</script>

<style scoped></style>