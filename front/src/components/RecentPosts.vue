<template>
  <v-card
    flat
  >
    <v-card-title>
      <h1 class="headline">
        Recent Posts
      </h1>
    </v-card-title>
    <v-row>
      <v-col
        v-for="(post, postId) in posts"
        :key="postId"
        md="6"
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
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

interface Post {
  image?: string;
  title: string;
  short?: string;
}

@Component({})
export default class RecentPosts extends Vue {
  posts: Post[] = [
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      title: 'Post Title',
      short: 'Short text',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      title: 'Post Title',
      short: 'Short text',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      title: 'Post Title',
      short: 'Short text',
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      title: 'Post Title',
      short: 'Short text',
    },
  ];
}
</script>
