<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <app-logo />

    <template
      v-for="(item, itemId) in menu"
    >
      <v-menu
        v-if="item.items"
        :key="itemId"
        offset-y
        open-on-hover
      >
        <template
          v-slot:activator="{ on }"
        >
          <v-btn
            text
            v-on="on"
          >
            {{ item.title }}
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(subitem, subitemId) in item.items"
            :key="subitemId"
            :to="subitem.to"
          >
            <v-list-item-title>
              {{ subitem.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn
        v-else
        :key="itemId"
        text
        :to="item.to"
      >
        {{ item.title }}
      </v-btn>
    </template>

    <v-spacer></v-spacer>

    <search-box />
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

interface MenuItem {
  title: string;
  to?: string;
  items?: MenuItem[];
}

@Component({
  components: {
    AppLogo: () => import('@/components/AppLogo.vue'),
    SearchBox: () => import('@/components/SearchBox.vue'),
  },
})
export default class AppHeader extends Vue {
  menu: MenuItem[] = [
    {
      title: 'Home',
      to: '/',
    },
    {
      title: 'Feature',
      items: [
        {
          title: 'Layout',
          to: '/layout',
        },
        {
          title: 'Styled',
          to: '/styles',
        },
        {
          title: 'More',
          to: '/more',
        },
      ],
    },
    {
      title: 'Portfolio',
      to: '/portfolio',
    },
    {
      title: 'Gallery',
      items: [
        {
          title: 'Two Columns',
          to: '/gallery-2',
        },
        {
          title: 'Three Columns',
          to: '/gallery-3',
        },
        {
          title: 'Four Columns',
          to: '/gallery-4',
        },
      ],
    },
    {
      title: 'Blog',
      to: '/blog',
    },
    {
      title: 'Contact',
      to: '/contact',
    },
    {
      title: 'Skins',
      items: [
        {
          title: 'Yellow',
        },
        {
          title: 'Blue',
        },
        {
          title: 'Red',
        },
        {
          title: 'Pink',
        },
        {
          title: 'Green',
        },
      ],
    },
  ];
}
</script>
