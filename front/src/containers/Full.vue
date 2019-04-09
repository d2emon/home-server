<template>
  <v-app class="body">
    <!-- nav-sidebar / -->

    <!-- app-header / -->

    <v-content>
      <router-view />
    </v-content>
    <!-- drawer / -->

    <!-- app-footer / -->
  </v-app>
</template>

<script>
  /*
import {
  AppHeader,
  AppFooter,
  NavSidebar,
  Drawer,
} from '@/components/';
  */
export default {
  name: 'full',
  /*
  components: {
    AppHeader,
    AppFooter,
    NavSidebar,
    Drawer,
  },
   */
  data: () => ({}),
}
</script>

<style scoped>
</style>
