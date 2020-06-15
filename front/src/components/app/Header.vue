<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <app-logo
      :title="title"
    />

    <v-spacer></v-spacer>

    <template
      v-for="(item, itemId) in menu"
    >
      <v-menu
        v-if="item.items"
        :key="itemId"
        offset-y
        open-on-hover
      >
        <template
          v-slot:activator="{ on }"
        >
          <v-btn
            text
            v-on="on"
          >
            {{ item.title }}
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(subitem, subitemId) in item.items"
            :key="subitemId"
            :to="subitem.to"
          >
            <v-list-item-title>
              {{ subitem.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn
        v-else
        :key="itemId"
        text
        :to="item.to"
      >
        {{ item.title }}
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import Component from 'vue-class-component';
import { MenuItem } from '@/types/menuItem';

@Component({
  components: {
    AppLogo: () => import('@/components/app/Logo.vue'),
  },
  props: {
    title: String,
    menu: {
      type: Array as PropType<MenuItem[]>,
    },
  },
})
export default class AppHeader extends Vue {
}
</script>
