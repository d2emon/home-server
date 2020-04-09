<template>
  <v-app>
    <app-header />

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
    AppHeader: () => import('@/components/AppHeader.vue'),
  },
})
export default class App extends Vue {}
</script>
