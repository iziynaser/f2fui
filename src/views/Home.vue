 <template>
  <div>

    <carousels/>

    <Products></Products>

    <!-- <brands/> -->

    <div></div>

    <!-- <brand/> -->

  </div>  
</template>

<script>
  
  import carousels from '../components/carousels'
  // import brands from '../components/brands'  
  // import brand from '../components/backEnd/product/brand'
  import Products from '../components/Products'

  export default {
    components: {
        carousels,
        // brands,
        // brand ,
        Products
    },
    methods:{

    }
  }
</script>
