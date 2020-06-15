<template>
  <v-text-field
    v-model="value"
    placeholder="Search"
    @change="search"
  >
    <template v-slot:append>
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

  data: () => ({
    value: '',
  }),

  methods: {
    search() {
      console.log('Search', this.value);
    },
  },
});
</script>
