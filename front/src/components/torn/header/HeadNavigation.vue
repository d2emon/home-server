<template>
  <nav class="sf-menu">
    <v-btn
      to="/"
      class="current_page_item"
    >
      Home
    </v-btn>
    <v-menu :nudge-width="100">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on">
          <span>Features</span>
          <v-icon dark>arrow_drop_down</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-tile to="/about">
          <v-list-tile-title>Layout</v-list-tile-title>
        </v-list-tile>
        <v-list-tile to="/about-styld">
          <v-list-tile-title>Styled</v-list-tile-title>
        </v-list-tile>
        <v-list-tile to="/about-more">
          <v-list-tile-title>More</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-btn to="/portfolio">
      Portfolio
    </v-btn>
    <v-menu :nudge-width="100">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on">
          <span>Gallery</span>
          <v-icon dark>arrow_drop_down</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-tile to="/gallery-2">
          <v-list-tile-title>Two Columns</v-list-tile-title>
        </v-list-tile>
        <v-list-tile to="/gallery">
          <v-list-tile-title>Three Columns</v-list-tile-title>
        </v-list-tile>
        <v-list-tile to="/gallery-4">
          <v-list-tile-title>Four Columns</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-btn to="/blog">
      Blog
    </v-btn>
    <v-btn to="/contact">
      Contact
    </v-btn>
    <v-menu :nudge-width="100">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on">
          <span>Color skins</span>
          <v-icon dark>arrow_drop_down</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-tile to="/">
          <v-list-tile-title>Yellow</v-list-tile-title>
        </v-list-tile>
        <v-list-tile to="/blue">
          <v-list-tile-title>Blue</v-list-tile-title>
        </v-list-tile>
        <v-list-tile to="/red">
          <v-list-tile-title>Red</v-list-tile-title>
        </v-list-tile>
        <v-list-tile to="/pink">
          <v-list-tile-title>Pink</v-list-tile-title>
        </v-list-tile>
        <v-list-tile to="/green">
          <v-list-tile-title>Green</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </nav>
</template>

<script>
export default {
  name: 'HeadNavigation',
};
</script>

<style scoped>

</style>
