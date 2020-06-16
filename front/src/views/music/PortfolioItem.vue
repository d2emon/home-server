<template>
  <v-container class="home">
    <page-card
      title="Portfolio"
      subtitle="Portfolio Subtitle"
    >
      <v-btn
        color="primary"
        to="/portfolio"
      >
        Go back to portfolio
      </v-btn>

      <page-card
        :title="item.title"
        :subtitle="item.subtitle"
      >
        <h3
          v-if="item.client"
        >
          Client: {{ item.client }}
        </h3>
        <h4
          v-if="item.date"
        >
          Project Date: {{ item.date }}
        </h4>
        <v-img
          v-if="item.image"
          :src="item.image"
        />
        <v-card-text>
          {{ item.text }}
        </v-card-text>
      </page-card>
    </page-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

interface PortfolioItem {
  title: string;
  subtitle?: string;
  client?: string;
  date?: string;
  image: string;
  text?: string;
  link: string;
}

@Component({
  components: {
    PageCard: () => import('@/components/PageCard.vue'),
    ImagesCarousel: () => import('@/components/music/ImagesCarousel.vue'),
    RecentPosts: () => import('@/components/music/RecentPosts.vue'),
  },
})
export default class Portfolio extends Vue {
  item: PortfolioItem = {
    title: 'Item1',
    subtitle: 'Item1 subtitle',
    client: 'IBM',
    date: 'Jan 2019',
    image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    link: '/',
    text: 'Item text',
  };
}
</script>
