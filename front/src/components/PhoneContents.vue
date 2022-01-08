<template>
  <page-card
    title="Приложения"
  >
    <v-row>
      <v-col
        v-for="(post, postId) in posts"
        :key="postId"
        md="3"
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
              :to="post.link"
            >
              Окрыть
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
  link?: string;
}

@Component({
  components: {
    PageCard: () => import('@/components/PageCard.vue'),
  },
})
export default class PhoneContents extends Vue {
  quiz: Post[] = [
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: '80e',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: '8BitQuiz',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Видеоигры',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Какой фильм?',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Квиз: Лого игра',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'МузБлокНот',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Советские Комедии',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Угадай мелодию',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Games Logo Quiz',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Games Quiz',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Guess The Game',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Guess The Movie Quiz',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Rock IQ',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Video Games',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Video Games Quiz',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Mega Quiz Emoji Games',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Mega Quiz Game Characters',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Mega Quiz Gaming',
      short: 'Архив',
    },
  ];

  posts: Post[] = [
    {
      image: '/img/applications/dnd.jpg',
      link: '/dnd/bestiary',
      title: '5e Bestiary',
      short: 'Бестиарий Dungeons & Dragons',
    },
    {
      image: '/img/applications/dnd.jpg',
      link: '/',
      title: '5e Companion App',
      short: 'Архив',
    },

    {
      image: '/img/applications/dnd.jpg',
      link: '/',
      title: 'Бестиарий DnD',
      short: 'Архив',
    },

    {
      image: '/img/applications/dnd.jpg',
      link: '/',
      title: 'Генератор Случайных Имен',
      short: 'Архив',
    },

    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Календарь',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Календарь',
      short: 'Архив',
    },

    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Карманный Комиссар',
      short: 'Архив',
    },

    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Контакты',
      short: 'Контакты',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Контакты',
      short: 'Архив',
    },

    {
      image: '/img/applications/dnd.jpg',
      link: '/',
      title: 'Мастер Игры Дневник',
      short: 'Архив',
    },

    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Песенник Русского Рока',
      short: 'Архив',
    },

    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Песни под гитару',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Подземелья Черного замка',
      short: 'Архив',
    },

    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Симулятор Киностудии',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Симулятор Музыканта',
      short: 'Архив',
    },

    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Симулятор Писателя',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Симулятор Писателя 2',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Симулятор Разработчика',
      short: 'Архив',
    },

    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Фото',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'ЧГК',
      short: 'Архив',
    },

    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Что? Где? Когда?',
      short: 'Архив',
    },

    {
      image: '/img/applications/dnd.jpg',
      link: '/',
      title: 'Adventuresmith',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Alchemy Animals',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'AmDm',
      short: 'Архив',
    },

    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'BattleScribe',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Blogger',
      short: 'Архив',
    },

    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Business Model Canvas',
      short: 'Архив',
    },
    {
      image: '/img/applications/dnd.jpg',
      link: '/',
      title: 'Campaign Manager',
      short: 'Архив',
    },
    {
      image: '/img/applications/dnd.jpg',
      link: '/',
      title: 'Character Sheet For Any RPG',
      short: 'Архив',
    },

    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Comic Screen',
      short: 'Архив',
    },
    {
      image: '/img/applications/dnd.jpg',
      link: '/',
      title: 'Complete Reference',
      short: 'Архив',
    },

    {
      image: '/img/applications/dnd.jpg',
      link: '/',
      title: 'D&D Beyond',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Do It Now',
      short: 'Архив',
    },

    {
      image: '/img/applications/dnd.jpg',
      link: '/',
      title: 'Dungeon Map Generator',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'EasyWay',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Epic to-do list',
      short: 'Архив',
    },

    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Evernote',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Flora Incognita',
      short: 'Архив',
    },

    {
      image: '/img/applications/dnd.jpg',
      link: '/',
      title: 'Game Master 5',
      short: 'Архив',
    },

    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'GitJournal',
      short: 'Архив',
    },

    {
      image: '/img/applications/dnd.jpg',
      link: '/',
      title: 'Haversack',
      short: 'Архив',
    },

    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Messenger',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Monefy',
      short: 'Архив',
    },

    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Plant Net',
      short: 'Архив',
    },

    {
      image: '/img/applications/dnd.jpg',
      link: '/',
      title: 'Pocket Campaigns',
      short: 'Архив',
    },

    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Podio',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Pomodoro Timer',
      short: 'Архив',
    },
    {
      image: '/img/applications/dnd.jpg',
      link: '/',
      title: 'ProDnD',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Project Schedule IAP',
      short: 'Архив',
    },

    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Retro Game Collector',
      short: 'Архив',
    },
    {
      image: '/img/applications/dnd.jpg',
      link: '/',
      title: 'Roll 20',
      short: 'Архив',
    },

    {
      image: '/img/applications/dnd.jpg',
      link: '/',
      title: 'RPG Campaign Manager',
      short: 'Архив',
    },
    {
      image: '/img/applications/dnd.jpg',
      link: '/',
      title: 'RPG Companion',
      short: 'Архив',
    },
    {
      image: '/img/applications/dnd.jpg',
      link: '/',
      title: 'RPG Master Sounds Mixer',
      short: 'Архив',
    },
    {
      image: '/img/applications/dnd.jpg',
      link: '/',
      title: 'RPG Notes',
      short: 'Архив',
    },

    {
      image: '/img/applications/dnd.jpg',
      link: '/',
      title: 'RPG Simple Dice',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Simpler',
      short: 'Архив',
    },

    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Story Plotter',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'SUSHIMI',
      short: 'Архив',
    },

    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Time Planner',
      short: 'Архив',
    },
    {
      image: '/img/applications/dnd.jpg',
      link: '/',
      title: 'Titan Companion',
      short: 'Архив',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Toggl Track',
      short: 'Архив',
    },

    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Trello',
      short: 'Архив',
    },

    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'VG Collection Tracker Games',
      short: 'Архив',
    },

  ];
}
</script>
