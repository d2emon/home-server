<template>
  <v-app>
    <app-header />

    <v-content>
      <router-view />
    </v-content>

    <app-footer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {
    AppHeader: () => import('@/components/AppHeader.vue'),
    AppFooter: () => import('@/components/AppFooter.vue'),
  },
})
export default class Torn extends Vue {}
</script>
