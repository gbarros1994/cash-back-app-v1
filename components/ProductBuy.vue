<template>
  <v-btn
      class="ma-2"
      :loading="loading2"
      :disabled="loading2"
      color="success"
      @click="loader = 'loading2'"
    >
      Comprar
      <template v-slot:loader>
        <span>Loading...</span>
      </template>
    </v-btn>
</template>