<template>
  <v-footer
    color="primary"
  >
    <v-col
      md="12"
    >
      Follow us:
      <v-btn
        v-for="(item, itemId) in social"
        :key="itemId"
        icon
        :href="item.href"
      >
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-col>

    <v-col
      md="12"
    >
      <v-row
        flat
        color="grey"
      >
        <v-col
          v-for="(block, blockId) in blocks"
          :key="blockId"
          md="4"
        >
          <v-card
            flat
          >
            <v-card-title>
              {{ block.title }}
            </v-card-title>
            <v-card-text
              v-if="block.text"
            >
              {{ block.text }}
            </v-card-text>
            <v-list
              v-if="block.items"
            >
              <v-list-item
                v-for="(item, itemId) in block.items"
                :key="itemId"
                :href="item.href"
              >
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-footer>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import Component from 'vue-class-component';
import { mapState } from 'vuex';
import { Article } from '@/types/article';
import { MenuItem } from '@/types/menuItem';

interface LinkItem {
  icon?: string;
  title?: string;
  href: string;
}

interface BlockItem {
  title: string;
  items?: LinkItem[];
  text?: string;
}

@Component({
  components: {
    SearchBox: () => import('@/components/music/SearchBox.vue'),
  },
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
export default class AppFooter extends Vue {
  copyright!: string;

  social!: MenuItem[];

  blocks: BlockItem[] = [
    {
      title: 'Links',
      items: [
        {
          title: 'Link 1',
          href: '/',
        },
        {
          title: 'Link 2',
          href: '/',
        },
        {
          title: 'Link 3',
          href: '/',
        },
      ],
    },
    {
      title: 'Pages',
      items: [
        {
          title: 'Link 1',
          href: '/',
        },
        {
          title: 'Link 2',
          href: '/',
        },
        {
          title: 'Link 3',
          href: '/',
        },
      ],
    },
    {
      title: 'Text Block',
      text: 'Block Text',
    },
  ];
}
</script>
