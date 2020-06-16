<template>
  <v-container class="search">
    <page-card
      title="Моя Музыка"
      subtitle="Поиск"
    >
      <v-container>
        <search-box
          :full="true"
          @search="search"
        />
      </v-container>
    </page-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {
    PageCard: () => import('@/components/music/PageCard.vue'),
    SearchBox: () => import('@/components/music/SearchBox.vue'),
  },
})
export default class Search extends Vue {
  search() {
    this.$router.push('/music/search/123');
  }
}
</script>
