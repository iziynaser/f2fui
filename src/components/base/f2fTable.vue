<template>    
    <div>
        <b-table 
                 id="my-table"
                 small     
                 striped 
                 hover  
                 head-variant="dark" 
                 responsive 
                 caption-top 
                 :fields="fields"
                 :items="items"                  
                 :current-page="currentPage" 
                 :per-page="perPage" 
                 @row-selected="rowSelected"
                 >

                <template v-slot:table-caption>
                    {{caption}}
                </template>                 

                <template v-slot:table-busy>
                    <div class="text-center text-danger my-2">
                        <b-spinner class="align-middle"></b-spinner>
                        <strong>loading</strong>
                    </div>  
                </template>

                <template v-slot:cell(index)="data">
                    {{data.index+1}}
                </template> 

                <template v-slot:cell(editp)="data">                               
                    <router-link :to="{
                        name:'createProduct',
                        params:{id:data.item.id,title:data.item.name}
                        }">
                    edit product      
                    </router-link>
                </template>

          </b-table>
          <b-pagination 
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            aria-controls="my-table"
            first-text="<<"
            prev-text="<"
            next-text=">"
            last-text=">>"
          ></b-pagination>           
    </div>
</template>
<script>

export default {
    name:'f2fTable',
    props:{
            items : [],
            fields: [],
            busy:{
                type:Boolean ,
                default : false
            } ,
            caption:{
                type:String,
                default : "list of search result (table)"
            },
            totalRows: {
                type:Number ,
                default:0
            }
          } ,
    data(){
      return {          
          perPage: 7 ,
          currentPage: 1 ,          
      }
    } ,
    created(){},
    methods:{
        rowSelected:function(items){
            this.$emit('rowSelected',items);
        }

    }        
}
</script>

<style scoped>
</style>