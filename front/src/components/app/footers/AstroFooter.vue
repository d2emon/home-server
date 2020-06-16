<template>
  <v-footer>
    <v-row>
      <v-col
        md="3"
      >
        <v-card
          flat
        >
          <v-card-title>
            Social
          </v-card-title>
          <v-list
            v-if="social"
            dense
            flat
          >
            <v-list-item
              v-for="(item, itemId) in social"
              :key="itemId"
              :href="item.href"
            >
              <v-list-item-icon>
                <v-icon>
                  {{ item.icon }}
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <v-col
        md="3"
      >
        <v-card
          flat
        >
          <v-card-title>
            Latest Records
          </v-card-title>
          <v-list
            v-if="articles"
            dense
            flat
          >
            <v-list-item
              v-for="item in articles"
              :key="item.itemId"
              :href="item.href"
            >
              <v-list-item-title>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <v-col
        md="6"
      >
        <v-card
          flat
        >
          <v-card-title>
            Newsletter
          </v-card-title>
          <v-container>
            <v-card-text>
              Sign up for Our Newsletter
            </v-card-text>
            <v-form>
              <v-row>
                <v-col>
                  <v-text-field
                  />
                </v-col>
                <v-col
                  md="4"
                >
                  <v-btn
                    color="primary"
                  >
                    Sign Up!
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
            <v-card-text>
              <span class="copyright">{{ copyright }}</span>
            </v-card-text>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import Component from 'vue-class-component';
import { MenuItem } from '@/types/menuItem';
import { Article } from '@/types/article';
import { mapState } from 'vuex';

@Component({
  computed: {
    ...mapState([
      'copyright',
      'social',
    ]),
  },
  props: {
    articles: {
      type: Array as PropType<Article[]>,
    },
  },
})
export default class Footer extends Vue {
  copyright!: string;

  social!: MenuItem[];
}
</script>
