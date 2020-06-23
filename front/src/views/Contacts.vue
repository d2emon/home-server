<template>
  <page-card
    class="contacts"
    :articles="carouselItems"
    :breadcrumbs="breadcrumbs"
    image="https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
    title="Контакты"
  >
    <v-form>
      <v-text-field
        label="Full Name"
      />
      <v-text-field
        label="Your Email"
      />
      <v-text-field
        label="Subject"
      />
      <v-textarea
        label="Message"
      />
      <v-checkbox
        label="I agree to the Terms and Conditions"
      />
      <v-checkbox
        label="Subscribe to newsletter"
      />
      <v-btn
        color="success"
      >
        Send Message
      </v-btn>
    </v-form>
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
export default class Contacts extends Vue {
  breadcrumbs: Breadcrumb[] = [
    {
      text: 'Главная',
      to: '/',
    },
    {
      text: 'Контакты',
      to: '/contacts',
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
}
</script>
