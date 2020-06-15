<template>
  <v-container>
    <v-row>
      <v-col
        v-for="item in articles"
        :key="item.itemId"
        md="3"
      >
        <v-card
          flat
          :to="`/article/${item.itemId}`"
        >
          <v-card
            v-if="item.image"
          >
            <v-img
              height="204px"
              :src="item.image"
            />
          </v-card>
          <v-card-title
            class="text--black"
          >
            {{ item.title }}
          </v-card-title>
          <v-card-text
            v-if="item.text"
          >
            {{ item.text }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import Component from 'vue-class-component';
import { Article } from '@/types/article';

@Component({
  components: {
    PageCard: () => import('@/components/PageCard.vue'),
  },
  props: {
    articles: {
      type: Array as PropType<Article[]>,
    },
  },
})
export default class RecentPosts extends Vue {}
</script>
