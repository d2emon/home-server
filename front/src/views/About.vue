<template>
  <div class="about">
    <h1>This is an about page</h1>
    <hello-world msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {
    HelloWorld: () => import('@/components/HelloWorld.vue'),
  },
})
export default class About extends Vue {}
</script>
