<template>
  <v-container class="layout">
    <page-card
      title="Layouts"
      subtitle="Layouts"
      :breadcrumbs="[]"
    >
      <v-container>
        <v-row>
          <v-col md="12">
            <v-card>Hello</v-card>
          </v-col>
          <v-col md="6">
            <v-card>Hello</v-card>
          </v-col>
          <v-col md="6">
            <v-card>Hello</v-card>
          </v-col>
          <v-col md="4">
            <v-card>Hello</v-card>
          </v-col>
          <v-col md="4">
            <v-card>Hello</v-card>
          </v-col>
          <v-col md="4">
            <v-card>Hello</v-card>
          </v-col>
          <v-col md="4">
            <v-card>Hello</v-card>
          </v-col>
          <v-col md="8">
            <v-card>Hello</v-card>
          </v-col>
          <v-col md="3">
            <v-card>Hello</v-card>
          </v-col>
          <v-col md="3">
            <v-card>Hello</v-card>
          </v-col>
          <v-col md="3">
            <v-card>Hello</v-card>
          </v-col>
          <v-col md="3">
            <v-card>Hello</v-card>
          </v-col>
          <v-col md="3">
            <v-card>Hello</v-card>
          </v-col>
          <v-col md="9">
            <v-card>Hello</v-card>
          </v-col>
        </v-row>
      </v-container>
    </page-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {
    PageCard: () => import('@/components/PageCard.vue'),
    HelloWorld: () => import('@/components/HelloWorld.vue'),
  },
})
export default class Layout extends Vue {}
</script>
