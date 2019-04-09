<template>
  <header>
    <v-toolbar
      app
      height="135px"
    >
      <v-layout
        row
        justify-space-between
      >
        <v-flex xs3>
          <v-toolbar-title>
            <router-link to="/">
              <v-img
                class="logo"
                src="/images/logo.png"
                width="250px"
              />
            </router-link>
          </v-toolbar-title>
          <!-- v-toolbar-title class="headline text-uppercase">
            <span>Vuetify</span>
            <span class="font-weight-light">MATERIAL DESIGN</span>
          </v-toolbar-title -->
        </v-flex>
        <v-flex xs9>
          <v-layout
            align-space-around
            justify-end
            row
            wrap
          >
            <v-flex xs4>
              <search-box />
            </v-flex>
          </v-layout>
          <v-layout
            align-space-around
            justify-end
            row
            wrap
          >
            <v-flex xs12 class="wrapper-header">
              <head-navigation />
              <!-- v-btn
                flat
                href="https://github.com/vuetifyjs/vuetify/releases/latest"
                target="_blank"
              >
                <span class="mr-2">Latest Release</span>
              </v-btn -->
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-toolbar>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  components: {
    SearchBox: () => import('./SearchBox.vue'),
    HeadNavigation: () => import('./HeadNavigation.vue'),
  }
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
