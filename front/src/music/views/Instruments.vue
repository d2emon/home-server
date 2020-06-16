<template>
  <v-container class="instruments">
    <page-card
      title="Инструменты"
    >
      <v-row>
        <v-col
          v-for="item in instruments"
          :key="item.slug"
          md="2"
        >
          <v-card
            :to="`/music/instruments/${item.slug}`"
          >
            <v-img
              :src="item.image || defaultImage"
              class="align-end"
            >
              <v-card
                dark
              >
                <v-card-title>
                  <h2>{{ item.name }}</h2>
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
import {
  mapActions,
  mapState,
} from 'vuex';
import { Instrument } from '../types';

@Component({
  components: {
    PageCard: () => import('@/components/music/PageCard.vue'),
  },
  computed: {
    ...mapState('music', ['instruments']),
  },
  methods: {
    ...mapActions('music', ['fetchInstruments']),
  },
})
export default class Instruments extends Vue {
  defaultImage = 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg';

  instruments!: Instrument[];

  fetchInstruments!: () => Instrument[];

  mounted() {
    this.fetchInstruments();
  }
}
</script>
