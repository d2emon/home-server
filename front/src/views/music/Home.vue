<template>
  <v-container class="home">
    <page-card
      title="Home Server"
      subtitle="Home Server Subtitle"
    >
      <images-carousel />
    </page-card>

    <recent-posts />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {
    PageCard: () => import('@/components/PageCard.vue'),
    ImagesCarousel: () => import('@/components/music/ImagesCarousel.vue'),
    RecentPosts: () => import('@/components/music/RecentPosts.vue'),
  },
})
export default class Home extends Vue {}
</script>
