<template>
  <v-carousel>
    <v-carousel-item
      v-for="item in items"
      :key="item.slug"
    >
      <v-card
        height="100%"
        :img="item.image"
        :to="item.url"
      >
        <v-card-title>
          {{ item.title }}
        </v-card-title>
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import Component from 'vue-class-component';
import { Article } from '@/types/article';

@Component({
  props: {
    items: {
      type: Array as PropType<Article[]>,
    },
  },
})
export default class ImagesCarousel extends Vue {}
</script>
