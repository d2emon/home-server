<template>
  <v-card>
    <v-toolbar
      dark
      flat
    >
      <v-btn
        icon
        @click="switchMenu"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <v-text-field
        hide-details
        prepend-inner-icon="mdi-magnify"
        single-line
        v-model="search"
      />

      <v-spacer />

      <v-btn icon>
        <v-icon>
          {{ ascending ? 'mdi-sort-ascending' : 'mdi-sort-descending' }}
        </v-icon>
      </v-btn>
    </v-toolbar>

    <v-container
      v-if="menuVisible"
    >
      <v-card>
        Settings
      </v-card>
    </v-container>

    <v-list
      two-line
    >
      <v-list-item-group>
        <v-list-item
          v-for="(item, itemId) in monsters"
          :key="itemId"
        >
          <v-list-item-content>
            <v-list-item-title
              v-text="item.name"
            />
            <v-list-item-subtitle>
              CR: {{ item.cr }} {{ item.monsterType }} SRD
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn
              icon
              @click="switchFavourite(itemId)"
            >
              <v-icon>{{ item.favourite ? 'mdi-star' : 'mdi-star-outline' }}</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    {{ search }}
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import monstersData, { Monster } from '@/data/monsters';

@Component({
  components: {
    HelloWorld: () => import('@/components/HelloWorld.vue'),
  },
})
export default class Bestiary extends Vue {
  ascending = true;

  menuVisible = false;

  monsters: Monster[] = monstersData;

  search = '';

  switchFavourite(itemId) {
    Vue.set(this.monsters[itemId], 'favourite', !this.monsters[itemId].favourite);
  }

  switchMenu() {
    this.menuVisible = !this.menuVisible;
  }
}
</script>
