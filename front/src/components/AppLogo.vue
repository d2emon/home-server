<template>
  <div class="d-flex align-center mr-2">
    <v-img
      :alt="title"
      class="shrink mr-2"
      contain
      :src="logo"
      transition="scale-transition"
      width="40"
    />

    {{ title }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapState } from 'vuex';

@Component({
  computed: {
    ...mapState([
      'title',
      'logo',
    ]),
  },
})
export default class AppLogo extends Vue {
  title!: string;

  logo!: string;
}
</script>
