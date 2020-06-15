<template>
  <v-container>
    <v-row>
      <v-col
        md="8"
      >
        <v-card
          flat
        >
          <v-card-title
            v-if="title"
          >
            <h1 class="headline">
              {{ title }}
            </h1>
          </v-card-title>
          <v-card-subtitle
            v-if="subtitle"
          >
            <h2 class="title">
              {{ subtitle }}
            </h2>
          </v-card-subtitle>
          <slot />
        </v-card>
      </v-col>
      <v-col
        md="4"
      >
        <images-carousel
          v-if="articles"
          :items="articles"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import Component from 'vue-class-component';
import { Article } from '@/types/article';

@Component({
  components: {
    ImagesCarousel: () => import('@/components/ImagesCarousel.vue'),
  },
  props: {
    title: String,
    subtitle: String,
    articles: {
      type: Array as PropType<Article[]>,
    },
  },
})
export default class PageCard extends Vue {}
</script>
