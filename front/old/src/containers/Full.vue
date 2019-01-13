<template>
  <v-app class="body">
    <nav-sidebar />

    <app-header />

    <v-content>
      <router-view />
    </v-content>
    <drawer />

    <app-footer />
  </v-app>
</template>

<script>
import {
  AppHeader,
  AppFooter,
  NavSidebar,
  Drawer
} from '@/components/'

export default {
  name: 'full',
  components: {
    AppHeader,
    AppFooter,
    NavSidebar,
    Drawer
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
/* .application.theme--light { */
.body {
  line-height: 1;
  font-family: Tahoma, Arial, Helvetica, sans-serif;
  font-size:  100%;
  height: 100%;
  color: #1f1f1f;
}
</style>
