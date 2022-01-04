<template>
  <ProductSee />
</template>

<script>
  export default {
    async asyncData({ params }) {
      console.log(params)
      const product = params.product // When calling /abc the slug will be "abc"
      return { product }
    }
  }
</script>