<template>
  <v-container class="instruments">
    <page-card
      title="Инструменты"
    >
      <v-row>
        <v-col
          v-if="instrument"
          md="2"
        >
          <v-card>
            <v-img
              :src="instrument.image || defaultImage"
              class="align-end"
            >
              <v-card
                dark
              >
                <v-card-title>
                  <h2>{{ instrument.name }}</h2>
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
    PageCard: () => import('@/components/PageCard.vue'),
  },
  computed: {
    ...mapState('music', ['instrument']),
  },
  methods: {
    ...mapActions('music', ['fetchInstrument']),
  },
})
export default class InstrumentData extends Vue {
  defaultImage = 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg';

  instrument!: Instrument;

  fetchInstrument!: (slug: string) => Instrument[];

  mounted() {
    this.fetchInstrument(this.$route.params.slug);
  }
}
</script>
