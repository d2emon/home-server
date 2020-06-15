<template>
  <div class="d-flex align-center mr-2">
    <v-img
      :alt="title"
      class="shrink mr-2"
      contain
      src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
      transition="scale-transition"
      width="40"
    />

    {{ title }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    title: String,
  },
})
export default class Logo extends Vue {}
</script>
