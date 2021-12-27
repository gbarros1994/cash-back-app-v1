<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product.id">
        <nuxt-link :to="'product/'+product.id">{{ product.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Bola de basquete',
          description: 'Apenas uma bola de basquete'
        }
      ]
    }
  }
}
</script>
