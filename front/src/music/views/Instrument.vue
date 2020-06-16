<template>
  <v-container class="instrument">
    <v-card
      v-if="instrument"
    >
      <v-img
        v-if="instrument.image"
        :src="instrument.image"
      />
      <v-container
        v-if="instrumentText"
        v-html="instrumentText"
      />
    </v-card>
    <page-card
      v-else-if="instrument === undefined"
      title="Загрузка…"
    >
      <v-card-text>
        Идет загрузка…
      </v-card-text>
    </page-card>
    <page-card
      v-else
      title="Ошибка"
    >
      <v-card-text>
        Инструмент не найден
      </v-card-text>
    </page-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  Component,
  Watch,
} from 'vue-property-decorator';
import { Route } from 'vue-router';
import {
  mapActions,
  mapState,
} from 'vuex';
import {
  Instrument,
  InstrumentPageRequest,
} from '../types';

@Component({
  components: {
    PageCard: () => import('@/components/music/PageCard.vue'),
  },
  computed: {
    ...mapState('music', [
      'instrument',
      'instrumentText',
    ]),
  },
  methods: {
    ...mapActions('music', ['fetchInstrument']),
  },
})
export default class InstrumentData extends Vue {
  instrument!: Instrument;

  fetchInstrument!: (payload: InstrumentPageRequest) => Instrument | null;

  @Watch('$route')
  onRouteChanged(value: Route) {
    this.fetchInstrument({
      instrument: value.params.instrument,
      page: value.params.page,
    });
  }

  mounted() {
    this.fetchInstrument({
      instrument: this.$route.params.instrument,
      page: this.$route.params.page,
    });
  }
}
</script>

<style scoped="true">
.instrument {
  max-width: 1024px;
}
</style>
