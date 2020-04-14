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
import { mapState } from 'vuex';

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
  computed: {
    ...mapState([
      'categories',
    ]),
  },
})
export default class AppHeader extends Vue {
  categories!: string[];

  get menu(): MenuItem[] {
    return [
      {
        title: 'Главная',
        to: '/',
      },
      {
        title: 'Фичи',
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
        title: 'Портфолио',
        to: '/portfolio',
      },
      {
        title: 'Галерея',
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
        title: 'Блог',
        to: '/blog',
      },
      {
        title: 'Контакты',
        to: '/contact',
      },
      {
        title: 'Категории',
        items: this.categories.map((title: string) => ({
          title,
          to: '/',
        })),
      },
    ];
  }
}
</script>
