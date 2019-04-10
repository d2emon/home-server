<template>
  <nav class="sf-menu">
    <template
      v-for="item in items"
    >
      <v-menu
        v-if="item.items"
        :key="item.title"
        :nudge-width="100"
      >
        <v-btn slot="activator">
          <span>{{item.title}}</span>
          <v-icon dark>arrow_drop_down</v-icon>
        </v-btn>

        <v-list>
          <v-list-tile
            v-for="subitem in item.items"
            :key="subitem.title"
            :to="subitem.to"
          >
            <v-list-tile-title>
              {{subitem.title}}
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn
        v-else
        :key="item.title"
        :to="item.to"
      >
        {{item.title}}
      </v-btn>
    </template>
    <!-- v-btn
      flat
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
    >
      <span class="mr-2">Latest Release</span>
    </v-btn -->
  </nav>
</template>

<script>
export default {
  name: 'HeadNavigation',
  props: [
    'items',
  ],
};
</script>

<style scoped>

</style>
