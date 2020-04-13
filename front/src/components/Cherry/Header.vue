<template>
  <v-toolbar>
    <h1>
      <router-link
        to="/"
      >
        {{ name }}
      </router-link>
    </h1>
    <div>
      {{ description }}
    </div>
    <v-spacer />
    <v-form>
      <v-text-field
        placeholder="Искать..."
      />
      <v-btn>
        Искать
      </v-btn>
    </v-form>
  </v-toolbar>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: [
    'name',
    'description',
  ],
})
export default class CherryHeader extends Vue {}
</script>
