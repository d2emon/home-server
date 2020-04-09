<template>
  <div class="d-flex align-center mr-2">
    <v-img
      alt="Home Server"
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

export default Vue.extend({
  name: 'AppLogo',

  data: () => ({
    title: 'Home Server',
  }),
});
</script>
