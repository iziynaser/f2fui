<template>
    <div>

        <b-dropdown id="dropdown-1" text="dropdown button 1" class="m-md-2">
            <b-dropdown-item>first action 1</b-dropdown-item>
            <b-dropdown-item>second action 1</b-dropdown-item>
            <b-dropdown id="dropdown-2" text="dropdown button 2" class="m-md-2">
                <b-dropdown-item>first action 2</b-dropdown-item>
                <b-dropdown-item>second action 2</b-dropdown-item>
            </b-dropdown>
        </b-dropdown>

    </div>
</template>

<script>
export default {
    name:'cmsMenu',
    props:{
          } ,
    data(){
      return {
        isDropdown2Visible:false
      }
    } ,
    methods:{

    } ,
    mounted:function(){
        this.$root.$on('bv::dropdown::show',bvEvent=>{
            if(bvEvent.componentId === 'dropdown-2'){
                this.isDropdown2Visible = true ;
            }
        })
        this.$root.$on('bv::dropdown::hide',bvEvent =>{
            if(bvEvent.componentId === 'dropdown-2'){
                this.isDropdown2Visible = false ;
            }
            if(this.isDropdown2Visible){
                bvEvent.preventDefault()
            }
        })
    }     
}
</script>

<style scoped>

</style>