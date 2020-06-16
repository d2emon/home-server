<template>
  <v-list>
    <v-list-item
      v-for="(m, itemId) in menu"
      :key="itemId"
      :to="m.href"
    >
      <v-list-item-title>
        {{ m.title }}
      </v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: [
    'menu',
  ],
})
export default class CherryFooter extends Vue {}
</script>
