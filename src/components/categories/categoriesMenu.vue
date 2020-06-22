<template>
    <div>
      <div>
        <!-- <b-dropdown id="dropdown-grouped" text="Dropdown with group" class="m-2"> -->
        <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none" no-caret>
              <template v-slot:button-content>
                  &#x1f50d;<span class="sr-only">Search</span>
                  categories
              </template>

              <b-dropdown-item-button>
                  Non-grouped Item
              </b-dropdown-item-button>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-group id="dropdown-group-1" header="Group 1">
                  <b-dropdown-item-button>First Grouped item</b-dropdown-item-button>
                  <b-dropdown-item-button>Second Grouped Item</b-dropdown-item-button>
              </b-dropdown-group>
              <b-dropdown-group id="dropdown-group-2" header="Group 2">
                  <b-dropdown-item-button>First Grouped item</b-dropdown-item-button>
                  <b-dropdown-item-button>Second Grouped Item</b-dropdown-item-button>
              </b-dropdown-group>
              <b-dropdown-divider></b-dropdown-divider>

              <b-dropdown-item-button>
                  Another Non-grouped Item
              </b-dropdown-item-button>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
export default {
    name:'categoriesMenu',
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