<template>
    <div>
                                      <!-- <cProductMain :id="id" :title="title"/> -->
            <label>assign survey to:</label>
            <b-row>
                <b-col>
                        <b-form-checkbox>content</b-form-checkbox>
                        <b-form-checkbox>product</b-form-checkbox>
                </b-col>
                <b-col>
                        <b-form-group
                            label="Filter"
                            label-cols-sm="3"
                            label-align-sm="right"
                            label-size="sm"
                            label-for="filterInput"
                            class="mb-0">
                            <b-input-group size="sm">
                                <b-form-input v-model="filter"
                                              type="search"
                                              id="filterInput"
                                              placeholder="type to search"></b-form-input>
                                              <b-input-group-prepend>
                                                  <b-button disabled="!filter" @click="filter = ''">clear</b-button> 
                                              </b-input-group-prepend>
                            </b-input-group>
                        </b-form-group>
                </b-col>
            </b-row>
            
            <label for="name">name</label><b-input id="name" type="text"></b-input>
            <label for="caption">caption</label><b-input id="caption" type="text"></b-input>
            <label for="description">description</label><b-input id="description" type="text"></b-input>
            <b-form-checkbox name="instacheckButton" switch>allow user update his comment </b-form-checkbox>
            <b-form-checkbox name="instacheckButton" switch>allow user insert multiple comment</b-form-checkbox>
            <b-form-checkbox name="instacheckButton" switch>allow anonymous user  insert comment</b-form-checkbox>
            <b-button>save survey</b-button>
    </div>
</template>

<script>
export default {
    name:'surveyCreate',
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