<template>
    <div>          
        <ul class="list-unstyled">
                <li>
                    <b-form-checkbox v-model="checked" name="checkButton" switch>
                        {{$t('categories_promotion')}}
                    </b-form-checkbox>
                  </li>
                <li>
                    <b-form-checkbox v-model="checked" name="checkButton" switch>
                        {{$t('categoriesKalaye_mojood')}}
                    </b-form-checkbox>                  
                </li>
                <li>
                    <b-form-checkbox v-model="checked" name="checkButton" switch>
                        {{$t('categories_kalayeAsl')}}
                    </b-form-checkbox>                                    
                </li>
                <!-- <li>foroshande</li> - rasmi , bargozide , mystore ,  -->
        </ul>        
    </div>
</template>

<script>
export default {
    name:'categoriesOther',
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