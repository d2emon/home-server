<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <app-logo />

    <v-spacer></v-spacer>

    <template
      v-for="(item, itemId) in menu"
    >
      <main-menu-item
        :key="itemId"
        :item="item"
      />
    </template>

    <!-- search-box / -->
  </v-app-bar>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import Component from 'vue-class-component';
import { MenuItem } from '@/types/menuItem';
import { mapState } from 'vuex';

@Component({
  components: {
    AppLogo: () => import('@/components/app/Logo.vue'),
    MainMenuItem: () => import('@/components/app/MenuItem.vue'),
  },
  computed: {
    ...mapState([
      'menu',
    ]),
  },
})
export default class AppHeader extends Vue {
  menu!: MenuItem;
}
</script>
