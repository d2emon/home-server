<template>
  <v-text-field
    v-model="value"
    placeholder="Найти…"
    @change="search"
  >
    <template
      v-if="full"
      v-slot:append-outer
    >
      <v-btn
        text
        @click="search"
      >
        Найти
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </template>
    <template
      v-else
      v-slot:append
    >
      <v-btn
        text
        icon
        @click="search"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </template>
  </v-text-field>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SearchBox',

  props: [
    'full',
  ],

  data: () => ({
    value: '',
  }),

  methods: {
    search() {
      this.$emit('search');
    },
  },
});
</script>
