<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <app-logo
      :title="title"
      :logo="logo"
    />

    <template
      v-for="(item, itemId) in menu"
    >
      <v-menu
        v-if="item.items"
        :key="itemId"
        class="mx-1"
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
            <v-icon>
              mdi-chevron-down
            </v-icon>
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
        class="mx-1"
        text
        :to="item.to"
      >
        {{ item.title }}
      </v-btn>
    </template>

    <v-spacer></v-spacer>

    <search-box />
    <v-btn
      icon
      class="mx-2"
      to="/music/login"
    >
      <v-icon>mdi-login</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapState } from 'vuex';
import { MenuItem } from '../types/MenuItem';

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

  title = 'Home Server';

  logo = 'https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png';

  /*
  languages: MenuItem[] = [
    'Russian',
    'English',
  ].map((title) => ({ title, to: '/music' }));
   */

  get pages(): MenuItem[] {
    return this.categories.map((title) => ({ title, to: '/music' }));
  }

  get menu(): MenuItem[] {
    return [
      {
        title: 'Жанры',
        to: '/music/genres',
      },
      {
        title: 'Альбомы',
        to: '/music/albums',
      },
      {
        title: 'Песни',
        to: '/music/songs',
      },
      {
        title: 'Плейлисты',
        to: '/music/playlists',
      },
      /*
      {
        title: 'Языки',
        items: this.languages,
      },
       */
      {
        title: 'Инструменты',
        to: '/music/instruments',
      },
      {
        title: 'Misheard',
        to: '/music/misheard',
      },
      {
        title: 'Статьи',
        to: '/music/articles',
      },
      {
        title: 'Страницы',
        items: this.pages,
      },
    ];
  }
}
</script>
