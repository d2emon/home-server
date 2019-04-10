<template>
  <header>
    <v-toolbar
      app
      height="135px"
    >
      <v-toolbar-title>
        <router-link to="/">
          <!-- v-img
            class="logo"
            src="/images/logo.png"
            width="250px"
          / -->
          Home Server
        </router-link>
      </v-toolbar-title>
      <!-- v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title -->

      <v-spacer></v-spacer>

      <head-navigation :items="items" />

      <search-box />

      <v-layout
        row
        justify-space-between
      >
    </v-toolbar>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  components: {
    SearchBox: () => import('./SearchBox.vue'),
    HeadNavigation: () => import('./HeadNavigation.vue'),
  },
  data: () => ({
    items: [
      { title: 'Home', to: '/' },
      {
        title: 'Features',
        to: '/',
        items: [
          { title: 'Layout', to: '/about' },
          { title: 'Styled', to: '/about-styld' },
          { title: 'More', to: '/more' },
        ],
      },
      { title: 'Portfolio', to: '/portfolio' },
      {
        title: 'Gallery',
        to: '/',
        items: [
          { title: 'Two Columns', to: '/gallery-2' },
          { title: 'Three Columns', to: '/gallery' },
          { title: 'Four Columns', to: '/gallery-4' },
        ],
      },
      { title: 'Blog', to: '/blog' },
      { title: 'Contact', to: '/contact' },
      {
        title: 'Color skins',
        to: '/',
        items: [
          { title: 'Yellow', to: '/' },
          { title: 'Blue', to: '/blue' },
          { title: 'Red', to: '/red' },
          { title: 'Pink', to: '/pink' },
          { title: 'Green', to: '/green' },
        ],
      },
    ],
  }),
};
</script>

<style scoped>
header {
  font-size: 14px;
}
.theme--dark.v-toolbar {
  background: #1f1f1f url(/images/bg/strips-bold.png);
}
.v-toolbar__content {
  padding-left: 0px;
}
a {
  text-decoration: none;
  color: #fec709;
}
.logo {
  margin: 20px 0 0 -24px;
}
.wrapper-header {
  height: 72px;
}
</style>
