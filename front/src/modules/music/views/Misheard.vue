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
import { MisheardInterface } from '@/modules/music/store/types';
import { Genre } from '../types/Genre';

@Component({
  components: {
    PageCard: () => import('@/components/music/PageCard.vue'),
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

  mounted() {
    this.fetchMisheard();
  }
}
</script>

<style scoped="true">
  .misheard {
    max-width: 1024px;
  }
</style>
