<template>
  <v-app>
    <app-header />

    <v-main>
      <router-view />
    </v-main>

    <recent-posts
      :articles="latest.slice(0, 4)"
    />

    <app-footer
      :articles="latest.slice(0, 3)"
    />
  </v-app>
</template>

<style>
body {
  margin-top: 64px;
}

blockquote {
  border-left: .25em solid #dfe2e5;
  color: #6a737d;
  padding: 0 1em;
}
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import {
  mapState,
} from 'vuex';

@Component({
  components: {
    AppHeader: () => import('@/components/app/Header.vue'),
    AppFooter: () => import('@/components/app/footers/AstroFooter.vue'),
    RecentPosts: () => import('@/components/RecentPosts.vue'),
  },
  computed: {
    ...mapState([
      'latest',
    ]),
  },
})
export default class App extends Vue {
}
</script>
