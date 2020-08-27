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
                 :items="datas.content" 
                 current-page="currentPage" 
                 per-page="perPage" >
                <template v-slot:table-caption>
                    list of other sellers (table)
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
          ></b-pagination>           
    </div>
</template>
<script>

//import i18next from 'i18next'

export default {
    name:'f2fTable',
    props:{
            datas : {},
            fields: []
          } ,
    data(){
      return {          
          perPage: 7 ,
          currentPage: 0 ,
          totalRows: 19
      }
    } ,
    created(){
        //this.fields = this.fieldz();
    },
    methods:{
        //   fieldz(){
        //       if(this.datas===null) return [];
        //       if(this.datas.content===undefined)
        //         return;
        //       let objs = this.datas.content[0] ;
        //       let fldz = [];
        //       for(var key in objs){
        //         let b = new Object();
        //         b.key = key;
        //         b.label = i18next.t('CONTENT_SEARCH_'+key);
        //         fldz.push(b);
        //       }
        //       return fldz;
        //   } 
    }        
}
</script>

<style scoped>
</style>