<template>
    <div class="p-2 my-2 border">
        <b-button v-b-toggle.ynCollapse variant="light" class="block">
            <span class="when-closed">
                <b-icon-arrow-down aria-hidden="true"></b-icon-arrow-down>
            </span>
            <span class="when-opened">
                <b-icon-arrow-up aria-hidden="true"></b-icon-arrow-up>
            </span>
            {{yesNoLabel}}
        </b-button>

        <b-collapse visible id="ynCollapse">
        <div class="input-group mb-3">
                <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">
                        <b-icon-search/>
                </span>
            </div>
            <input type="text" class="form-control" ref="searchText"
                   placeholder="Search" 
                   aria-label="Search" 
                   aria-describedby="basic-addon1"
                   v-on:keydown="filterResult()"
                   >
        </div>
        <div>
            <b-form-checkbox-group stacked
                v-model="value" 
                :options="options"
                name="checkButton">              
            </b-form-checkbox-group>
        </div>
        </b-collapse>

        
    </div>
</template>

<script>
export default {
    name:'filteri',
    props:{
          } ,
    data(){
      return {
        yesNoLabel:'is it ok???',
        defaultSearchText : 'filter result...',
        value:[],
        oriOptions:[],
        options:[
            {text:'yes',value:'yes'},
            {text:'no1',value:'no1'},
            {text:'no2',value:'no2'},
            {text:'no3',value:'no3'},
            {text:'no4',value:'no4'},
            {text:'no5',value:'no5'},
            {text:'no6',value:'no6'},
            {text:'no7',value:'no7'},
            {text:'no8',value:'no8'},
            {text:'no9',value:'no9'},
            {text:'no39',value:'no39'},
            {text:'no29',value:'no49'},
            {text:'no19',value:'no59'},
            {text:'no10',value:'no10'}
        ]
      }
    } ,
    methods:{
        filterResult(){
            if(this.oriOptions.length===0)
               this.oriOptions = this.options.slice(0);

            if(this.$refs.searchText.value.length==0)
                this.options = this.oriOptions.slice(0);

            this.options.shift();

        },
    } ,
    computed:{
    }     
}
</script>

<style scoped>
.collapsed > .when-opened,
:not(.collapsed) > .when-closed{
    display:none
}
</style>