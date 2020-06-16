<template>
  <v-container class="gallery">
    <page-card
      title="Gallery"
      subtitle="Gallery Subtitle"
    >
      <v-toolbar
        color="primary"
        dark
      >
        <v-toolbar-title>
          Filter
        </v-toolbar-title>
        <template v-slot:extension>
          <v-tabs
            background-color="primary"
            dark
            v-model="categoryId"
          >
            <v-tab
              v-for="(category, categoryId) in categories"
              :key="categoryId"
            >
              {{ category }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
      <v-tabs-items
        v-model="categoryId"
      >
        <v-tab-item
          v-for="(category, categoryId) in categories"
          :key="categoryId"
        >
          <v-row>
            <v-col
              v-for="(image, imageId) in images"
              :key="imageId"
              :md="imageSize"
            >
              <a
                :href="image"
              >
                <v-img
                  :src="image"
                />
              </a>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs-items>
    </page-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

interface GalleryItem {
  title: string;
  subtitle?: string;
  image: string;
  text?: string;
  link: string;
}

@Component({
  components: {
    PageCard: () => import('@/components/music/PageCard.vue'),
  },
})
export default class Gallery extends Vue {
  categories: string[] = [
    'All',
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];

  categoryId = 0;

  get imageSize() {
    return 12 / (parseInt(this.$route.params.cols, 0) || 1);
  }

  images: string[] = [
    'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
    'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
    'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
  ];

  items: GalleryItem[] = [
    {
      title: 'Item1',
      subtitle: 'Item1 subtitle',
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      link: '/portfolio/1',
      text: 'Item text',
    },
    {
      title: 'Item2',
      subtitle: 'Item2 subtitle',
      image: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      link: '/portfolio/2',
      text: 'Item text',
    },
    {
      title: 'Item3',
      subtitle: 'Item3 subtitle',
      image: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      link: '/portfolio/3',
      text: 'Item text',
    },
  ];
}
</script>
