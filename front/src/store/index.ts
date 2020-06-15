import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import categories from './categories';
import { RootState } from './types';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    title: 'Home Server',
    menu: [
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
    ],
    latest: [
      {
        itemId: 1,
        title: 'This is just a place holder',
        slug: 'item-1',
        url: '/aricles/item-1',
        date: new Date(2020, 5, 1),
        image: 'https://freewebsitetemplates.com/preview/astronomywebsitetemplate/images/astronaut.jpg',
        text: 'You can remove any link to our website from this website template, you\'re free to use this website template without linking back to us.',
      },
      {
        itemId: 2,
        title: 'This is just a place holder',
        slug: 'item-1',
        url: '/aricles/item-1',
        date: new Date(2020, 5, 1),
        image: 'https://freewebsitetemplates.com/preview/astronomywebsitetemplate/images/earth.jpg',
        text: 'You can remove any link to our website from this website template, you\'re free to use this website template without linking back to us.',
      },
      {
        itemId: 3,
        title: 'This is just a place holder',
        slug: 'item-1',
        url: '/aricles/item-1',
        date: new Date(2020, 5, 1),
        image: 'https://freewebsitetemplates.com/preview/astronomywebsitetemplate/images/spacecraft-small.jpg',
        text: 'You can remove any link to our website from this website template, you\'re free to use this website template without linking back to us.',
      },
      {
        itemId: 4,
        title: 'This is just a place holder',
        slug: 'item-1',
        url: '/aricles/item-1',
        date: new Date(2020, 5, 1),
        image: 'https://freewebsitetemplates.com/preview/astronomywebsitetemplate/images/space-shuttle.jpg',
        text: 'You can remove any link to our website from this website template, you\'re free to use this website template without linking back to us.',
      },
    ],
    social: [
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
    ],
    copyright: '© Copyright © 2023.Company name all rights reserved',
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    categories,
  },
};

export default new Vuex.Store<RootState>(store);
