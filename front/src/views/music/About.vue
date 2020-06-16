<template>
  <v-container class="about">
    <page-card
      title="This is an about page"
    >
      <hello-world msg="Welcome to Your Vue.js App" />
    </page-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {
    PageCard: () => import('@/components/music/PageCard.vue'),
    HelloWorld: () => import('@/components/HelloWorld.vue'),
  },
})
export default class About extends Vue {}
</script>
