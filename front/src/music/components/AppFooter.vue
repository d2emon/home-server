<template>
  <v-footer>
    <v-col
      class="text-center"
      cols="12"
    >
      {{ year }} - <strong>{{ title }}</strong>
    </v-col>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: [
    'year',
    'title',
  ],
})
export default class AppFooter extends Vue {}
</script>
