<template>
  <v-app>
    <app-header
      :title="title"
      :menu="menu"
    />

    <v-main>
      <router-view />
    </v-main>

    <recent-posts
      :articles="categories"
    />

    <app-footer
      :articles="latest.slice(0, 3)"
      :social="social"
      :copyright="copyright"
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
  mapActions,
  mapState,
} from 'vuex';
import { Article } from '@/types/article';

@Component({
  components: {
    AppHeader: () => import('@/components/app/Header.vue'),
    AppFooter: () => import('@/components/app/Footer.vue'),
    RecentPosts: () => import('@/components/RecentPosts.vue'),
  },
  computed: {
    ...mapState([
      'title',
      'menu',
      'latest',
      'social',
      'copyright',
    ]),
    ...mapState('categories', ['categories']),
  },
  methods: {
    ...mapActions('categories', ['fetchCategories']),
  },
})
export default class App extends Vue {
  fetchCategories!: () => Promise<Article | null>;

  async mounted() {
    await this.fetchCategories();
  }
}
</script>
