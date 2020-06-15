<template>
  <v-container class="genres">
    <page-card
      title="Songs"
    >
      <v-row>
        <v-col
          v-for="song in songs"
          :key="song.songId"
          md="3"
        >
          <v-card
            to="/music"
          >
            <v-img
              :src="song.image || defaultImage"
              class="align-end"
            />
            <v-card-title>
              <h2>{{ song.title }}</h2>
            </v-card-title>
            <v-card-subtitle>
              <h3>{{ song.artist }}</h3>
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </page-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Song } from '../types/Song';

@Component({
  components: {
    PageCard: () => import('@/components/PageCard.vue'),
  },
})
export default class Songs extends Vue {
  defaultImage = 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg';

  songs: Song[] = [
    {
      songId: 1,
      title: '80s',
    },
    {
      songId: 2,
      title: 'Alternative',
    },
    {
      songId: 3,
      title: 'Blues',
    },
    {
      songId: 4,
      title: 'Dance',
    },
    {
      songId: 5,
      title: 'Electronic',
    },
    {
      songId: 6,
      title: 'Hard Rock',
    },
    {
      songId: 7,
      title: 'Heavy Metal',
    },
    {
      songId: 8,
      title: 'Hip-Hop',
    },
    {
      songId: 9,
      title: 'Indie',
    },
    {
      songId: 10,
      title: 'Industrial',
    },
    {
      songId: 11,
      title: 'Jazz',
    },
    {
      songId: 12,
      title: 'Punk',
    },
    {
      songId: 13,
      title: 'Rap',
    },
    {
      songId: 14,
      title: 'Thrash Metal',
    },
    {
      songId: 15,
      title: 'Trance',
    },
  ];
}
</script>
