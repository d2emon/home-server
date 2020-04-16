<template>
  <v-container class="misheard">
    <page-card
      title="Misheard Lyrics"
    >
      <v-row>
        <v-col
          v-for="m in misheard"
          :key="m.misheardId"
          md="12"
        >
          <v-card
            flat
          >
            <v-card-text
              v-html="m.html"
            />
          </v-card>
        </v-col>
      </v-row>
    </page-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import {
  mapActions,
  mapState,
} from 'vuex';
import { MisheardInterface } from '@/music/store/types';
import { Genre } from '../types/Genre';

@Component({
  components: {
    PageCard: () => import('@/components/PageCard.vue'),
    ImagesCarousel: () => import('@/components/ImagesCarousel.vue'),
    RecentPosts: () => import('@/components/RecentPosts.vue'),
    SearchBox: () => import('@/components/SearchBox.vue'),
  },
  computed: {
    ...mapState('music', ['misheard']),
  },
  methods: {
    ...mapActions('music', ['fetchMisheard']),
  },
})
export default class Misheard extends Vue {
  misheard!: string[];

  fetchMisheard!: () => MisheardInterface[];

  genres: Genre[] = [
  ];

  mounted() {
    this.fetchMisheard();
  }
}
</script>
