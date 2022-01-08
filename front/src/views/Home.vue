<template>
  <v-container class="home">
    <drive-contents />

    <page-card
      :title="title"
      :subtitle="subtitle"
    >
      <images-carousel />
    </page-card>

    <recent-posts />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapState } from 'vuex';

@Component({
  components: {
    PageCard: () => import('@/components/PageCard.vue'),
    ImagesCarousel: () => import('@/components/ImagesCarousel.vue'),
    DriveContents: () => import('@/components/DriveContents.vue'),
    RecentPosts: () => import('@/components/RecentPosts.vue'),
  },
  computed: {
    ...mapState([
      'title',
      'subtitle',
    ]),
  },
})
export default class Home extends Vue {
  title!: string;

  subtitle!: string;
}
</script>
