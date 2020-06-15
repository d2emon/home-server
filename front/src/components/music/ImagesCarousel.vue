<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item, itemId) in items"
      :key="itemId"
      :src="item.src"
    />
  </v-carousel>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

interface CarouselItem {
  src: string;
}

@Component({})
export default class ImagesCarousel extends Vue {
  items: CarouselItem[] = [
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
    },
  ];
}
</script>
