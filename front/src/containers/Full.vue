<template>
  <div id="full">
    <!-- nav-sidebar / -->

    <app-header />

    <v-content id="main">
      <router-view />
    </v-content>
    <!-- drawer / -->

    <app-footer />

    <!-- script type="text/javascript"> Cufon.now(); </script -->
  </div>
</template>

<script>
  /*
import {
  NavSidebar,
  Drawer,
} from '@/components/';
  */
export default {
  name: 'full',
  components: {
    AppHeader: () => import('@/components/torn/header/AppHeader.vue'),
    AppFooter: () => import('@/components/torn/footer/AppFooter.vue'),
    /*
    NavSidebar,
    Drawer,
     */
  },
  data: () => ({}),
}
</script>

<style scoped>
#full {
  line-height: 1;
  font-family: Tahoma, Arial, Helvetica, sans-serif;
  font-size: 100%;
  height: 100%;
  background: #1f1f1f url(/images/bg/strips-bold.png);
  color: #1f1f1f;
}
#main {
  position: relative;
  width: 100%;
  min-height: 700px;
  font-size: 14px;
  background: white;
  padding-top: 22px;
}
</style>
