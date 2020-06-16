<template>
  <div
    class="d-flex align-center mr-2"
    @click="$router.push('/')"
  >
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
      'logo',
      'title',
    ]),
  },
})
export default class Logo extends Vue {
  logo!: string;

  title!: string;
}
</script>
