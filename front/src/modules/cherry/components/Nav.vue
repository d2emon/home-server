<template>
  <v-toolbar>
    <v-btn
      v-for="(m, itemId) in menu"
      :key="itemId"
      :to="m.href"
      text
    >
      {{ m.title }}
    </v-btn>
  </v-toolbar>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: [
    'menu',
  ],
})
export default class CherryNav extends Vue {}
</script>
