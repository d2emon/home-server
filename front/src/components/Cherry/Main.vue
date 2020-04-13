<template>
  <v-row>
    <v-col md="3">
      <v-container>
        <v-card>
          <v-card-title>
            <h2>Контакты</h2>
          </v-card-title>
          <v-form>
            <v-text-field
              v-for="(i, itemId) in form.inputs"
              :key="`1-${itemId}`"
              :placeholder="i"
            />
            <v-text-field
              disabled
              placeholder="Disabled"
            />
            <v-text-field
              v-for="(i, itemId) in form.inputs"
              :key="`2-${itemId}`"
              :placeholder="i"
            />
            <v-select
              :items="form.select"
            />
            <v-card>
              <v-card-title>
                <h4>Радио-кнопки</h4>
              </v-card-title>
              <v-radio-group>
                <v-radio
                  v-for="(i, itemId) in form.radio"
                  :key="`3-${itemId}`"
                  :label="i"
                />
              </v-radio-group>
            </v-card>
            <v-card>
              <v-card-title>
                <h4>Чекбоксы</h4>
              </v-card-title>
              <v-checkbox
                v-for="(i, itemId) in form.radio"
                :key="`4-${itemId}`"
                :label="i"
              />
            </v-card>
            <v-btn>
              Подтвердить
            </v-btn>
            <v-btn>
              Отменить
            </v-btn>
          </v-form>
        </v-card>

        <v-card>
          <v-card-title>
            {{ sidebar.title }}
          </v-card-title>
          <v-card-text>
            {{ sidebar.text }}
          </v-card-text>
          <v-card-actions>
            <v-btn
              to="/"
            >
              Читать далее
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-col>
    <v-col md="9">
      <v-container>
        <v-card>
          <v-card-title>
            <h1>{{ article.title }}</h1>
          </v-card-title>
          <v-container>
            <v-card-text>
              {{ article.text }}
            </v-card-text>
            <v-img
              v-for="(i, itemId) in images"
              :key="itemId"
              :src="i"
              to="/"
            />
            <v-card>
              <v-card-title>
                <h1>Списки</h1>
              </v-card-title>
              <v-card>
                <v-card-title>
                  <h4>Со стилем <code>&lt;ul&gt;</code></h4>
                </v-card-title>
                <v-list>
                  <v-list-item
                    v-for="(i, itemId) in list"
                    :key="itemId"
                  >
                    <v-list-item-title>{{ i }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card>
              <v-card>
                <v-card-title>
                  <h4>Без стиля <code>&lt;ul class="unstyled"&gt;</code></h4>
                </v-card-title>
                <v-list>
                  <v-list-item
                    v-for="(i, itemId) in list"
                    :key="itemId"
                  >
                    <v-list-item-title>{{ i }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card>
              <v-card>
                <v-card-title>
                  <h4>Упорядоченные <code>&lt;ol&gt;</code></h4>
                </v-card-title>
                <v-list>
                  <v-list-item
                    v-for="(i, itemId) in list"
                    :key="itemId"
                  >
                    <v-list-item-title>{{ i }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-card>
            <v-card>
              <v-card-title>
                <h1>Таблицы</h1>
              </v-card-title>
            </v-card>
          </v-container>
        </v-card>
      </v-container>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

interface FormFields {
  inputs: string[];
  select: string[];
  radio: string[];
  check: string[];
}

interface Article {
  title: string;
  text: string;
}

@Component({
  props: [
    'menu',
  ],
})
export default class CherryMain extends Vue {
  form: FormFields = {
    inputs: [
      'Первый пункт',
      'Второй пункт',
      'Третий пункт',
    ],
    select: [
      'Первый пункт',
      'Второй пункт',
      'Третий пункт',
    ],
    radio: [
      'Первый пункт',
      'Второй пункт',
      'Третий пункт',
    ],
    check: [
      'Первый пункт',
      'Второй пункт',
      'Третий пункт',
    ],
  };

  sidebar: Article = {
    title: 'Заголовок',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure',
      'dolor in reprehenderit in ',
      '<a href="#">voluptate velit esse cillum dolore</a>',
      'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa ',
      'qui officia deserunt mollit anim id est laborum.',
    ].join(' '),
  };

  article: Article = {
    title: 'Заголовок…',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
      'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure',
      'dolor in reprehenderit in ',
      '<a href="#">voluptate velit esse cillum dolore</a>',
      'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa ',
      'qui officia deserunt mollit anim id est laborum.',
    ].join(' '),
  };

  images: string[] = [
    'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
  ];

  list: string[] = [
    'Lorem ipsum dolor sit amet',
    'Sed ut perspiciatis unde',
    'At vero eos et accusamus'
      + '<ul>'
      + '<li>Lorem ipsum dolor sit amet</li>'
      + '<li>Sed ut perspiciatis unde</li>'
      + '<li>At vero eos et accusamus</li>'
      + '</ul>',
    'Lorem ipsum dolor sit amet',
    'Sed ut perspiciatis unde',
    'At vero eos et accusamus',
  ];
}
</script>
