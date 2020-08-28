<template>
    <div>
          <b-row class="my-1">
              <b-col>
                  {{$t('CONTENT_CREATE_status')}}
              </b-col>
              <b-col>
                  <b-button-group>
                      <b-dropdown right text="change state to">
                          <b-dropdown-item>inProgress</b-dropdown-item>
                          <b-dropdown-item>initial draft</b-dropdown-item>
                          <b-dropdown-item>revised draft</b-dropdown-item>
                          <b-dropdown-item>final draft</b-dropdown-item>
                          <b-dropdown-item>available</b-dropdown-item>
                          <b-dropdown-item>deactivated</b-dropdown-item>
                          <b-dropdown-item>published</b-dropdown-item>
                      </b-dropdown>
                  </b-button-group>
              </b-col>
          </b-row>
          <b-row class="my-1">
              <b-col>{{$t('CONTENT_CREATE_tite')}}</b-col>
              <b-col>
                  <b-input  type="text"/>
              </b-col>
          </b-row>
    </div>
</template>

<script>
export default {
    name:'contentStatus',
    props:{
          } ,
    data(){
      return {
        
      }
    } ,
    methods:{

    }      
}
</script>

<style scoped>

</style>