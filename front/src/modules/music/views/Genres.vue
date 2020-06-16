<template>
  <v-container class="genres">
    <page-card
      title="Жанры"
    >
      <v-row>
        <v-col
          v-for="genre in genres"
          :key="genre.genreId"
          md="2"
        >
          <v-card
            :to="genre.link"
          >
            <v-img
              :src="genre.image || defaultImage"
              class="align-end"
            >
              <v-card
                dark
              >
                <v-card-title>
                  <h2>{{ genre.title }}</h2>
                </v-card-title>
              </v-card>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </page-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Genre } from '../types/Genre';

@Component({
  components: {
    PageCard: () => import('@/components/music/PageCard.vue'),
    ImagesCarousel: () => import('@/components/music/ImagesCarousel.vue'),
    RecentPosts: () => import('@/components/music/RecentPosts.vue'),
    SearchBox: () => import('@/components/music/SearchBox.vue'),
  },
})
export default class Genres extends Vue {
  defaultImage = 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg';

  genres: Genre[] = [
    {
      genreId: 1,
      title: '80s',
      link: '/music/genres/80s',
    },
    {
      genreId: 2,
      title: 'Alternative',
      link: '/music/genres/80s',
    },
    {
      genreId: 3,
      title: 'Blues',
      link: '/music/genres/80s',
    },
    {
      genreId: 4,
      title: 'Dance',
      link: '/music/genres/80s',
    },
    {
      genreId: 5,
      title: 'Electronic',
      link: '/music/genres/80s',
    },
    {
      genreId: 6,
      title: 'Hard Rock',
      link: '/music/genres/80s',
    },
    {
      genreId: 7,
      title: 'Heavy Metal',
      link: '/music/genres/80s',
    },
    {
      genreId: 8,
      title: 'Hip-Hop',
      link: '/music/genres/80s',
    },
    {
      genreId: 9,
      title: 'Indie',
      link: '/music/genres/80s',
    },
    {
      genreId: 10,
      title: 'Industrial',
      link: '/music/genres/80s',
    },
    {
      genreId: 11,
      title: 'Jazz',
      link: '/music/genres/80s',
    },
    {
      genreId: 12,
      title: 'Punk',
      link: '/music/genres/80s',
    },
    {
      genreId: 13,
      title: 'Rap',
      link: '/music/genres/80s',
    },
    {
      genreId: 14,
      title: 'Thrash Metal',
      link: '/music/genres/80s',
    },
    {
      genreId: 15,
      title: 'Trance',
      link: '/music/genres/80s',
    },
  ];
}
</script>
