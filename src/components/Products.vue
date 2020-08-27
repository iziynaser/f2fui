<template>
    <div>
        <div class="container mt-5py-2">
            <h1>products {{this.productSize}}</h1>
            <div class="row">
                <div v-for="product in listOfProducts" :key="product.id" >
                    <cards :product="product"    cardImage="http://localhost:8080/images/flw/f1.jpg">
                    </cards>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapActions,mapGetters } from 'vuex';
import cards from './cards'

export default {
    name:'Products',
    props:{
          } ,
    data(){
      return {
        
      }
    } ,
    methods:{
        ...mapActions(['fetchProducts'])
    },
    components:{
         cards
    },
    computed:{
        ...mapGetters(['productSize','listOfProducts']),
    },
    created(){
        this.fetchProducts();
    }
}
</script>

<style scoped>

</style>