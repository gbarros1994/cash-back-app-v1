<template>
  <h1>{{ this.slug }}a</h1>
</template>

<script>
  export default {
    async asyncData({ params }) {
      console.log(params)
      const slug = params // When calling /abc the slug will be "abc"
      return { slug }
    }
  }
</script>