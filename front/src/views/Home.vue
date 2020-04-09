<template>
  <v-container class="home">
    <v-card
      flat
    >
      <v-card-title>
        <h1 class="headline">
          Home Server
        </h1>
      </v-card-title>
      <v-card-subtitle>
        <h2 class="title">
          Home Server Subtitle
        </h2>
      </v-card-subtitle>
      <images-carousel />
    </v-card>

    <recent-posts />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {
    ImagesCarousel: () => import('@/components/ImagesCarousel.vue'),
    RecentPosts: () => import('@/components/RecentPosts.vue'),
  },
})
export default class Home extends Vue {}
</script>
