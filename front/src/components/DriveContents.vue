<template>
  <page-card
    title="Разделы"
  >
    <v-row>
      <v-col
        v-for="(post, postId) in posts"
        :key="postId"
        md="4"
      >
        <v-card>
          <v-img
            class="white--text align-end"
            height="162px"
            :src="post.image"
          >
            <v-card-title>
              {{ post.title }}
            </v-card-title>
          </v-img>
          <v-card-text
            class="text--primary"
          >
            {{ post.short }}
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="primary"
            >
              More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </page-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

interface Post {
  image?: string;
  title: string;
  short?: string;
}

@Component({
  components: {
    PageCard: () => import('@/components/PageCard.vue'),
  },
})
export default class DriveContents extends Vue {
  posts: Post[] = [
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Archive',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      title: 'Assets',
      short: 'Ассеты',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      title: 'Cheatsheets',
      short: 'Шпаргалки',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      title: 'Clouds',
      short: 'Облачные хранилища',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      title: 'Database',
      short: 'Базы данных',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      title: 'Documents',
      short: 'Документы',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      title: 'DosBox',
      short: 'Эмулятор DOS',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      title: 'Downloads',
      short: 'Загрузки',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      title: 'Fireball Games',
      short: 'Fireball Games',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      title: 'Hack',
      short: 'Взлом',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      title: 'ISO',
      short: 'Эмуляторы CD',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      title: 'Music',
      short: 'Музыка',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      title: 'Portable',
      short: 'Портативные программы',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      title: 'Projects',
      short: 'Проекты',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      title: 'Quest',
      short: 'Квесты',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      title: 'Rescue USB',
      short: 'USB-Реаниматор',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      title: 'RPG',
      short: 'Ролевые игры',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      title: 'Soft',
      short: 'Программы',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      title: 'Sources',
      short: 'Исходники',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      title: 'Translation',
      short: 'Переводы',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      title: 'Unity',
      short: 'Unity',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      title: 'Университет',
      short: 'Материалы по учебе',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      title: 'Wiki',
      short: 'Моя вики',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      title: 'Work',
      short: 'Работа',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      title: 'ЧГК',
      short: 'Что? Где? Когда?',
    },
  ];
}
</script>
