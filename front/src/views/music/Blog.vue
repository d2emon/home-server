<template>
  <v-container class="blog">
    <v-row>
      <v-col
        md="8"
      >
        <v-row
          v-for="(item, itemId) in items"
          :key="itemId"
        >
          <v-col md="3">
            <v-card
              v-if="item.date"
              dark
              color="primary"
              class="white--text"
            >
              <v-card-title>
                <h1>{{ item.date.day }}</h1>
              </v-card-title>
              <v-card-subtitle>
                <h2>{{ item.date.month }}, {{ item.date.year }}</h2>
              </v-card-subtitle>
              <v-card-actions>
                <v-icon>mdi-chat</v-icon> {{ item.comments }}
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col md="9">
            <v-card
              flat
            >
              <v-img
                v-if="item.image"
                :src="item.image"
                class="white--text"
              >
                <v-card-title>
                  <h1>
                    {{ item.title}}
                  </h1>
                </v-card-title>
                <v-card-subtitle>
                  <h2 class="white--text">
                    Posted by
                    <router-link :to="item.author.link">
                      {{ item.author.name }}
                    </router-link>
                    in
                    <router-link :to="item.category.link">
                      {{ item.category.name }}
                    </router-link>
                  </h2>
                </v-card-subtitle>
              </v-img>
              <v-card-text>
                {{ item.text }}
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="primary"
                  :to="item.link"
                >
                  More
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="12">
            <v-card-actions>
              <v-btn
                color="primary"
              >
                Newer
              </v-btn>
              <v-spacer />
              <v-btn
                color="primary"
              >
                Older
              </v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        md="4"
      >
        <v-card
          class="mb-2"
        >
          <v-card-title
            class="primary"
            dark
          >
            Categories
          </v-card-title>
          <v-list>
            <v-list-item
              v-for="(category, categoryId) in categories"
              :key="categoryId"
              :to="category.link"
            >
              <v-list-item-title>
                {{ category.name }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>

        <v-card
          class="mb-2"
        >
          <v-card-title
            class="primary mb-2"
            dark
          >
            Recent Posts
          </v-card-title>
          <v-row
            v-for="(item, itemId) in items"
            :key="itemId"
          >
            <v-col
              md="4"
            >
              <v-img
                v-if="item.image"
                :src="item.image"
              />
            </v-col>
            <v-col
              md="8"
            >
              <v-card
                flat
                :to="item.link"
              >
                <v-card-title>
                  {{ item.title }}
                </v-card-title>
                <v-card-text>
                  {{ item.text }}
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

interface BlogAuthor {
  name: string;
  link: string;
}
interface BlogCategory {
  name: string;
  link: string;
}
interface BlogDate {
  day: string;
  month: string;
  year: string;
}
interface BlogItem {
  title: string;
  subtitle?: string;
  author: BlogAuthor;
  category: BlogCategory;
  date?: BlogDate;
  image: string;
  text?: string;
  link: string;
  comments: number;
}

@Component({
  components: {
    PageCard: () => import('@/components/music/PageCard.vue'),
  },
})
export default class Blog extends Vue {
  categories: BlogCategory[] = [
    {
      name: 'Category',
      link: '/',
    },
    {
      name: 'Category',
      link: '/',
    },
    {
      name: 'Category',
      link: '/',
    },
  ];

  items: BlogItem[] = [
    {
      title: 'Item1',
      subtitle: 'Item1 subtitle',
      author: {
        name: 'Author',
        link: '/',
      },
      category: {
        name: 'Category',
        link: '/',
      },
      date: {
        day: '1',
        month: 'Jan',
        year: '2020',
      },
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      link: '/portfolio/1',
      text: 'Item text',
      comments: 1,
    },
    {
      title: 'Item2',
      subtitle: 'Item2 subtitle',
      author: {
        name: 'Author',
        link: '/',
      },
      category: {
        name: 'Category',
        link: '/',
      },
      date: {
        day: '1',
        month: 'Jan',
        year: '2020',
      },
      image: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      link: '/portfolio/2',
      text: 'Item text',
      comments: 1,
    },
    {
      title: 'Item3',
      subtitle: 'Item3 subtitle',
      author: {
        name: 'Author',
        link: '/',
      },
      category: {
        name: 'Category',
        link: '/',
      },
      date: {
        day: '1',
        month: 'Jan',
        year: '2020',
      },
      image: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      link: '/portfolio/3',
      text: 'Item text',
      comments: 1,
    },
  ];
}
</script>
