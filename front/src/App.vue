<template>
  <v-app>
    <app-header
      :title="title"
      :menu="menu"
    />

    <v-main>
      <router-view />
    </v-main>

    <recent-posts
      :articles="latest.slice(0, 4)"
    />

    <app-footer
      :articles="latest.slice(0, 3)"
      :social="social"
      :copyright="copyright"
    />
  </v-app>
</template>

<style>
body {
  margin-top: 64px;
}
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { MenuItem } from '@/types/menuItem';
import { Article } from '@/types/article';

@Component({
  components: {
    AppHeader: () => import('@/components/app/Header.vue'),
    AppFooter: () => import('@/components/app/Footer.vue'),
    RecentPosts: () => import('@/components/RecentPosts.vue'),
  },
})
export default class App extends Vue {
  title = 'Home Server';

  menu: MenuItem[] = [
    {
      title: 'Home',
      to: '/',
    },
    {
      title: 'About',
      to: '/about',
    },
    {
      title: 'Blog',
      to: '/blog',
    },
    {
      title: 'Gallery',
      to: '/gallery',
    },
    {
      title: 'Contact Us',
      to: '/contacts',
    },
  ];

  latest: Article[] = [
    {
      itemId: 1,
      title: 'This is just a place holder',
      date: new Date(2020, 5, 1),
      image: 'https://freewebsitetemplates.com/preview/astronomywebsitetemplate/images/astronaut.jpg',
      text: 'You can remove any link to our website from this website template, you\'re free to use this website template without linking back to us.',
    },
    {
      itemId: 2,
      title: 'This is just a place holder',
      date: new Date(2020, 5, 1),
      image: 'https://freewebsitetemplates.com/preview/astronomywebsitetemplate/images/earth.jpg',
      text: 'You can remove any link to our website from this website template, you\'re free to use this website template without linking back to us.',
    },
    {
      itemId: 3,
      title: 'This is just a place holder',
      date: new Date(2020, 5, 1),
      image: 'https://freewebsitetemplates.com/preview/astronomywebsitetemplate/images/spacecraft-small.jpg',
      text: 'You can remove any link to our website from this website template, you\'re free to use this website template without linking back to us.',
    },
    {
      itemId: 4,
      title: 'This is just a place holder',
      date: new Date(2020, 5, 1),
      image: 'https://freewebsitetemplates.com/preview/astronomywebsitetemplate/images/space-shuttle.jpg',
      text: 'You can remove any link to our website from this website template, you\'re free to use this website template without linking back to us.',
    },
  ];

  social: MenuItem[] = [
    {
      icon: 'mdi-twitter',
      href: '//twitter.com',
      title: 'Twitter',
    },
    {
      icon: 'mdi-vimeo',
      href: '//vimeo.com',
      title: 'Vimeo',
    },
    {
      icon: 'mdi-youtube',
      href: '//youtube.com',
      title: 'YouTube',
    },
    {
      icon: 'mdi-gitlab',
      href: '//gitlab.com',
      title: 'GitLab',
    },
    {
      icon: 'mdi-facebook',
      href: '//facebook.com',
      title: 'Facebook',
    },
    {
      icon: 'mdi-vk',
      href: '//vk.com',
      title: 'VK',
    },
  ];

  copyright = '© Copyright © 2023.Company name all rights reserved';
}
</script>
