<template>
  <v-container>
    <item-header
      :title="title"
      :subtitle="subtitle"
      :image="image"
    >
      <slot name="title" />
    </item-header>

    <v-breadcrumbs :items="breadcrumbs" />

    <v-row>
      <v-col>
        <v-card
          flat
        >
          <slot />
        </v-card>
      </v-col>
      <v-col
        v-if="articles"
        md="4"
      >
        <images-carousel
          :items="articles"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import Component from 'vue-class-component';
import { Article } from '@/types/article';
import { Breadcrumb } from '@/types/breadcrumb';

@Component({
  components: {
    ItemHeader: () => import('@/components/app/ItemHeader.vue'),
    ImagesCarousel: () => import('@/components/ImagesCarousel.vue'),
  },
  props: {
    title: String,
    subtitle: String,
    image: String,
    breadcrumbs: {
      type: Array as PropType<Breadcrumb[]>,
    },
    articles: {
      type: Array as PropType<Article[]>,
    },
  },
})
export default class PageCard extends Vue {}
</script>
