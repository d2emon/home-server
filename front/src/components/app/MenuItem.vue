<template>
  <v-menu
    v-if="item.items"
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
    text
    :to="item.to"
  >
    {{ item.title }}
  </v-btn>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import Component from 'vue-class-component';
import { MenuItem } from '@/types/menuItem';

@Component({
  props: {
    item: {
      type: Object as PropType<MenuItem>,
    },
  },
})
export default class MainMenuItem extends Vue {
  item!: MenuItem;
}
</script>
