<template>
  <v-app>
    <app-header />

    <v-content>
      <router-view />
    </v-content>

    <app-footer
      year="2020"
      :title="title"
    />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {
    AppHeader: () => import('@/music/components/AppHeader.vue'),
    AppFooter: () => import('@/music/components/AppFooter.vue'),
  },
})
export default class Music extends Vue {
  title = 'Home Server';
}
</script>
