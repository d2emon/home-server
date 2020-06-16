<template>
  <v-container class="cherry">
    <v-card>
      <cherry-header
        :name="siteName"
        :description="siteDescription"
      />
      <cherry-slider />
      <cherry-nav
        :menu="menu"
      />
      <v-breadcrumbs :items="breadcrumbs" />
      <cherry-main />
      <cherry-footer />
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

interface MenuItem {
  title: string;
  href: string;
}

interface Breadcrumb {
  text: string;
  to: string;
}

@Component({
  components: {
    CherryHeader: () => import('@/modules/cherry/components/Header.vue'),
    CherrySlider: () => import('@/modules/cherry/components/Slider.vue'),
    CherryNav: () => import('@/modules/cherry/components/Nav.vue'),
    CherryMain: () => import('@/modules/cherry/components/Main.vue'),
    CherryFooter: () => import('@/modules/cherry/components/Footer.vue'),
  },
})
export default class Cherry extends Vue {
  siteName = 'Home Server';

  siteDescription = 'Site Description';

  menu: MenuItem[] = [
    {
      href: '/',
      title: 'Главная',
    },
    {
      href: '/',
      title: 'Книги',
    },
    {
      href: '/games/index.html',
      title: 'Игры',
    },
    {
      href: '/',
      title: 'Музыка',
    },
    {
      href: '/',
      title: 'Кино',
    },
    {
      href: '/cherry',
      title: 'Cherry',
    },
    {
      href: '/',
      title: 'Контакты',
    },
  ];

  breadcrumbs: Breadcrumb[] = [
    {
      text: 'Главная',
      to: '/',
    },
    {
      text: 'Промежуточная',
      to: '/',
    },
    {
      text: 'Текущая',
      to: '/cherry',
    },
  ];
}
</script>
