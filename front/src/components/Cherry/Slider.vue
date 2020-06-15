<template>
  <v-img
    src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
    class="white--text"
  >
    <h1>
      Заголовок
    </h1>
    <p>
      Какой-то текст
    </p>
    <span>
      Еще один заголовок...
    </span>
    <p>
      Тут идет очень длинный текст. Чем больше, тем лучше. Lorem ipsum dolor sit amet, consectetur
      adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </p>
  </v-img>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: [
    'name',
    'description',
  ],
})
export default class CherrySlider extends Vue {}
</script>
