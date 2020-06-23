<template>
  <v-container class="home">
    <page-card
      title="Portfolio"
      subtitle="Portfolio Subtitle"
      :breadcrumbs="[]"
    >
      <v-row
        v-for="(item, itemId) in items"
        :key="itemId"
      >
        <v-col md="8">
          <v-img
            v-if="item.image"
            :src="item.image"
          />
        </v-col>
        <v-col md="4">
          <page-card
            :title="item.title"
            :subtitle="item.subtitle"
          >
            <v-card-text>
              {{ item.text }}
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="primary"
                :to="item.link"
              >
                More
              </v-btn>
            </v-card-actions>
          </page-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="8">
          <v-card-actions>
            <v-btn
              color="primary"
            >
              Newer
            </v-btn>
            <v-spacer />
            <v-btn
              color="primary"
            >
              Older
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </page-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

interface PortfolioItem {
  title: string;
  subtitle?: string;
  image: string;
  text?: string;
  link: string;
}

@Component({
  components: {
    PageCard: () => import('@/components/PageCard.vue'),
  },
})
export default class Portfolio extends Vue {
  items: PortfolioItem[] = [
    {
      title: 'Item1',
      subtitle: 'Item1 subtitle',
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      link: '/portfolio/1',
      text: 'Item text',
    },
    {
      title: 'Item2',
      subtitle: 'Item2 subtitle',
      image: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      link: '/portfolio/2',
      text: 'Item text',
    },
    {
      title: 'Item3',
      subtitle: 'Item3 subtitle',
      image: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      link: '/portfolio/3',
      text: 'Item text',
    },
  ];
}
</script>
