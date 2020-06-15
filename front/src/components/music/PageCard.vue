<template>
  <v-col
    xs="12"
  >
    <v-card
      flat
    >
      <v-card-title
        v-if="title"
      >
        <h1 class="headline">
          {{ title }}
        </h1>
      </v-card-title>
      <v-card-subtitle
        v-if="subtitle"
      >
        <h2 class="title">
          {{ subtitle }}
        </h2>
      </v-card-subtitle>
      <slot />
    </v-card>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: [
    'title',
    'subtitle',
  ],
})
export default class PageCard extends Vue {}
</script>
