<template>
  <page-card
    class="gallery"
    :articles="carouselItems"
    :breadcrumbs="breadcrumbs"
    title="Gallery"
    image="https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
  >
    <v-row
      v-if="selected"
    >
      <v-col
        md="12"
      >
        <v-card
          :to="`/article/${selected.itemId}`"
        >
          <v-img
            :alt="selected.title"
            :src="selected.image"
            :title="selected.title"
          />
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        md="3"
        v-for="item in carouselItems"
        :key="item.itemId"
      >
        <v-card
          @click="selectImage(item.itemId)"
        >
          <v-img
            :alt="item.title"
            :src="item.image"
            :title="item.title"
          />
        </v-card>
      </v-col>
    </v-row>
  </page-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Article } from '@/types/article';
import {Breadcrumb} from "@/types/breadcrumb";

@Component({
  components: {
    PageCard: () => import('@/components/PageCard.vue'),
  },
})
export default class Gallery extends Vue {
  breadcrumbs: Breadcrumb[] = [
    {
      text: 'Главная',
      to: '/',
    },
    {
      text: 'Галерея',
      to: '/gallery',
    },
  ];

  carouselItems: Article[] = [
    {
      slug: '1',
      url: '/articles/1',
      title: 'This is just a place holder',
      date: new Date(2020, 5, 1),
      image: 'https://freewebsitetemplates.com/preview/astronomywebsitetemplate/images/astronaut.jpg',
      text: 'You can remove any link to our website from this website template, you\'re free to use this website template without linking back to us.',
    },
    {
      slug: '2',
      url: '/articles/2',
      title: 'This is just a place holder',
      date: new Date(2020, 5, 1),
      image: 'https://freewebsitetemplates.com/preview/astronomywebsitetemplate/images/earth.jpg',
      text: 'You can remove any link to our website from this website template, you\'re free to use this website template without linking back to us.',
    },
    {
      slug: '3',
      url: '/articles/3',
      title: 'This is just a place holder',
      date: new Date(2020, 5, 1),
      image: 'https://freewebsitetemplates.com/preview/astronomywebsitetemplate/images/spacecraft-small.jpg',
      text: 'You can remove any link to our website from this website template, you\'re free to use this website template without linking back to us.',
    },
    {
      slug: '4',
      url: '/articles/4',
      title: 'This is just a place holder',
      date: new Date(2020, 5, 1),
      image: 'https://freewebsitetemplates.com/preview/astronomywebsitetemplate/images/space-shuttle.jpg',
      text: 'You can remove any link to our website from this website template, you\'re free to use this website template without linking back to us.',
    },
    {
      slug: '5',
      url: '/articles/5',
      title: 'This is just a place holder',
      date: new Date(2020, 5, 1),
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    },
    {
      slug: '6',
      url: '/articles/6',
      title: 'This is just a place holder',
      date: new Date(2020, 5, 1),
      image: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
    },
    {
      slug: '7',
      url: '/articles/7',
      title: 'This is just a place holder',
      date: new Date(2020, 5, 1),
      image: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
    },
    {
      slug: '8',
      url: '/articles/8',
      title: 'This is just a place holder',
      date: new Date(2020, 5, 1),
      image: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
    },
  ];

  itemId = 1;

  get selected() {
    return this.carouselItems.find((i) => (i.itemId === this.itemId));
  }

  selectImage(value: number) {
    this.itemId = value;
  }
}
</script>
