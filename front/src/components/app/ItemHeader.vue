<template>
  <v-card>
    <v-toolbar>
      <v-card-title
        v-if="title"
      >
        <h1 class="headline">
          {{ title }}
        </h1>
      </v-card-title>
      <v-spacer />
      <v-form>
        <v-text-field
          placeholder="Искать..."
        >
          <v-btn
            icon
            slot="append"
            text
          >
            <v-icon>
              mdi-magnify
            </v-icon>
          </v-btn>
        </v-text-field>
      </v-form>
    </v-toolbar>

    <v-img
      v-if="image"
      :src="image"
      class="white--text"
    >
      <v-container>
        <v-card-subtitle
          v-if="subtitle"
          class="white--text"
        >
          <h2 class="title">
            {{ subtitle }}
          </h2>
        </v-card-subtitle>

        <slot />
      </v-container>
    </v-img>
    <v-container
      v-else
    >
      <v-card-subtitle
        v-if="subtitle"
      >
        <h2 class="title">
          {{ subtitle }}
        </h2>
      </v-card-subtitle>

      <slot />
    </v-container>
  </v-card>

</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: [
    'title',
    'subtitle',
    'image',
  ],
})
export default class CherryHeader extends Vue {}
</script>
