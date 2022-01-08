<template>
  <v-container class="layout">
    <page-card
      title="Ролевые Игры"
      subtitle="Dungeons & Dragons"
    >
      <v-container>
        <router-view />
      </v-container>
    </page-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {
    PageCard: () => import('@/components/PageCard.vue'),
  },
})
export default class DnD extends Vue {}
</script>
