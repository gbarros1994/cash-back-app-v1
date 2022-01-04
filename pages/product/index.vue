<template>
  <v-row>
    <v-col md="4" v-for="product in products" :key="product.id">
      <ProductDescription />
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  computed: {
    ...mapState("product", {
      products: "products"
    })
  },
  methods: {
    ...mapActions("product", {
      fetchProducts: "fetchProducts"
    })
  },
  mounted() {
    this.fetchProducts();
  },
  data() {
    return {
  
    }
  }
}
</script>
