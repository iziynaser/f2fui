<template>
    <div>
        <div>
            <b-row>
                <template>
                    <b-breadcrumb>
                        <b-breadcrumb-item href="#home" @click="loadCategories(1)">
                            <b-icon-house-fill scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon-house-fill>
                        </b-breadcrumb-item>
                        <b-breadcrumb-item v-for="breadcrumb in breadcrumbItems" 
                                           :key="breadcrumb.id" 
                                           href="#" 
                                           @click="loadCategories(breadcrumb.id,breadcrumb.text)">
                            {{breadcrumb.text}}
                        </b-breadcrumb-item>
                    </b-breadcrumb>
                </template>
            </b-row>
            <b-row class="my-1">
                <b-col sm="3">
                    <b-card>
                    <b-form-checkbox-group stacked name="checkButton">      
                        <b-form-checkbox :value="option.id" v-for="option in cols1" 
                                         :key="option.id" 
                                         @change="loadCategories(option.id,option.name)">
                            {{option.name}}
                        </b-form-checkbox>        
                    </b-form-checkbox-group>
                    </b-card>
                </b-col>
                <b-col sm="9">
                    <b-card>
                        <b>
                        {{$t('BRAND_MAIN_listOfBrands')}}
                        </b>
                        {{cName}}
                        <hr/>
                        <b-list-group horizontal >
                            <b-list-group-item v-for="(brand,idx) in brands" :key="brand.id" :variant="variantColors(idx)">
                                {{brand.name}}
                            </b-list-group-item>
                        </b-list-group>
                    </b-card>                    
                </b-col>
            </b-row>
        </div>

        <div>
          <b-row>
              <b-col>
                  {{$t('BRAND_MAIN_NAME')}}
              </b-col>
              <b-col>
                  <b-input v-model="form.name"/>
              </b-col>
              <b-col>
                  {{$t('BRAND_MAIN_VALUE')}}
              </b-col>
              <b-col>
                  <b-input v-model="form.value"/>
              </b-col>
              <b-col>
                  <b-button variant="success" @click="saveBrand">+</b-button>
              </b-col>
          </b-row>
        </div>
    </div>
</template>

<script>

import * as axios from 'axios'

export default {
    name:'brandMain',
    props:{
          } ,
    data(){
      return {
        value:[],
        cols1:[],
        breadcrumbItems:[],
        brands:[],
        cCode:"",
        cName:"",
        form:{
            name:"",
            value:"",
            categoryId:""
        }
      }
    } ,
    methods:{
        variantColors(idx){
            return idx % 2==0 ? "light" : "info" ;
        },
        saveBrand(){
               var self = this;
               const url="http://localhost:8080/f2f/brand/save" ;
               axios.post(url,self.form)
                    .then((res) => {
                        console.log(res);
                        //self.brands.push({name:self.form.cName,value:self.form.cValue})
                    })
                    .catch((err) => {
                        console.log(err);
                    }) 
        },
        loadCategories(idv,idt){
                console.log('idv:'+idv+',idt:'+idt);
                var self = this;

                if(idv==1 && self.breadcrumbItems.length>1){
                    self.breadcrumbItems = self.breadcrumbItems.splice(0);
                }
                
                self.form.categoryId=idv;
                self.cName = idt;

                const url = `http://localhost:8080/f2f/Category/listById`;
                axios.get(url,{
                params:{id:idv}
            })
                .then(function(res){
                    if(res){
                        self.cols1 = res.data;
                        if(idv!==1){
                            let exist=false;
                            let idx=-1;
                            for(const [i,b] of self.breadcrumbItems.entries()){
                                if(b.id==idv){
                                     exist = true;
                                     idx=i;
                                }                                    
                            }
                            if(exist==false)        
                                self.breadcrumbItems.push({text:idt,id:idv,href:'#'});
                            else{
                                let L = self.breadcrumbItems.length-1 ;
                                if(L!==idx)
                                    var k = 0;
                                    while(k<L-idx){
                                         self.breadcrumbItems.pop();
                                         k++;   
                                    }                                        
                            }
                                
                        }else{
                            self.breadcrumbItems=[];
                        }

                        //load brands
                        self.loadBrands(idv);
                    }                        
                })
                .catch(function(error){
                    console.log(error)    ;
                });
        },
        loadBrands(cId){
            var self = this;
            const url = `http://localhost:8080/f2f/brand/byCategoryId`;
            axios.get(url,{
                params:{
                    categoryId: cId
                }
            })
                .then(function(res){
                    self.brands = res.data;
                })
                .catch(function(error){
                    console.log(error)    ;
                });
        }
    }
    ,created(){
        this.loadCategories(1,'همه دسته ها');
    }      
}
</script>

<style scoped>

</style>