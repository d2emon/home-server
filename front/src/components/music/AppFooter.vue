<template>
  <v-footer
    color="primary"
  >
    <v-col
      md="12"
    >
      Follow us:
      <v-btn
        v-for="(social, socialId) in socials"
        :key="socialId"
        icon
        :href="social.href"
      >
        <v-icon>{{ social.icon }}</v-icon>
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
import Vue from 'vue';
import Component from 'vue-class-component';

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
    AppLogo: () => import('@/components/AppLogo.vue'),
    SearchBox: () => import('@/components/SearchBox.vue'),
  },
})
export default class AppFooter extends Vue {
  socials: LinkItem[] = [
    {
      icon: 'mdi-twitter',
      href: '/',
    },
    {
      icon: 'mdi-vimeo',
      href: '/',
    },
    {
      icon: 'mdi-youtube',
      href: '/',
    },
    {
      icon: 'mdi-gitlab',
      href: '/',
    },
    {
      icon: 'mdi-facebook',
      href: '/',
    },
    {
      icon: 'mdi-vk',
      href: '/',
    },
  ];

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
