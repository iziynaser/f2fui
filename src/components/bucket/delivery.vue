<template>
    <div>
        <b-card>
          <b-card-header>
            select your address
            <b-button>
              select another address
            </b-button>
          </b-card-header>
        </b-card>


          <b-form-group label="select a day for delivery">
            <b-form-radio-group 
                id="weeks" 
                name="weeks" 
                v-model="selected" 
                :options="options" 
                buttons 
                button-variant="outline-dark" 
                size="lg">
            </b-form-radio-group>
          </b-form-group>

              <b-form-group label="sdlfhslfhsfhskjhfsdkhfsdkh">
                <b-form-radio-group stacked>
                  <b-form-radio  size="lg">                    
                    <span class="border-top">8-10 am</span>
                  </b-form-radio>
                  <b-form-radio  size="lg">
                    <span class="border-top">8-10 am</span>
                   </b-form-radio>
                  <b-form-radio  size="lg">
                    <span class="border-top">8-10 am</span>
                  </b-form-radio>
                  <b-form-radio  size="lg">
                    <span class="border-top">8-10 am</span>
                  </b-form-radio>
                  <b-form-radio  size="lg">
                     <span class="border-top">8-10 am</span>
                  </b-form-radio>
                  <b-form-radio  size="lg">
                     <span class="border-top">8-10 am</span>
                  </b-form-radio>                
                </b-form-radio-group>
              </b-form-group>  



        other specific criteria for delivery of your product
        <b-textarea>
        </b-textarea>
        <b-button to="/payment">
          move to payment page
        </b-button>
    </div>
</template>

<script>
export default {
    name:'delivery',
    props:{
          } ,
    data(){
      //return {
        const now = new Date()
        const today = new Date(now.getFullYear(),now.getMonth(),now.getDate());
        const minDate = new Date(today);

        const maxDate = new Date(today);
        maxDate.setMonth(minDate.getMonth()+1);

        return {
          value:'',
          min : minDate,
          max : maxDate,
          textDelivery :'' ,
          selected:'shanbe',
          options:[
            {text:'shanbe',value:'shanbe',disabled:false},
            {text:'1shanbe',value:'1shanbe',disabled:false},
            {text:'2shanbe',value:'2shanbe',disabled:false},
            {text:'3shanbe',value:'3shanbe',disabled:false},
            {text:'4shanbe',value:'4shanbe',disabled:false},
            {text:'5shanbe',value:'5shanbe',disabled:false},
            {text:'6shanbe',value:'6shanbe',disabled:false},
          ]
        }
      //}
    } ,
    methods:{
      dateDisabled(ymd,date){
        const weekday = date.getDay();
        const day = date.getDate();
        console.log(day);
        return weekday === 0 || weekday === 6 || weekday === 13
      }
    }      
}
</script>

<style scoped>

</style>