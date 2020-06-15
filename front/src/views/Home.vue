<template>
  <page-card
    class="home"
    :articles="carouselItems"
  >
    This website template has been designed by Free Website Templates for you, for free. You can
    replace all this text with your own text. Want an easier solution for a Free Website? Head
    straight to Wix and immediately start customizing your website! Wix is an online website
    builder with a simple drag & drop interface, meaning you do the work online and instantly
    publish to the web. Nothing to download, nothing to upload. You can remove any link to our
    website from this website template, you're free to use this website template without linking
    back to us. If you're having problems editing this website template, then don't hesitate to ask
    for help on the Forums.
  </page-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Article } from '@/types/article';

@Component({
  components: {
    PageCard: () => import('@/components/PageCard.vue'),
  },
})
export default class Home extends Vue {
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
}
</script>
