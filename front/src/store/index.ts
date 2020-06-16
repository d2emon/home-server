import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import music from '@/modules/music/store/music';
import categories from './categories';
import { RootState } from './types';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    title: 'Домашний Сервер',
    copyright: '© Copyright © 2023.Company name all rights reserved',
    logo: 'https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png',
    menu: [
      {
        title: 'Главная',
        to: '/',
      },
      {
        title: 'О Сервере',
        to: '/about',
      },
      /*
      {
        title: 'Фичи',
        items: [
          {
            title: 'Layout',
            to: '/layout',
          },
          {
            title: 'Styled',
            to: '/styles',
          },
          {
            title: 'More',
            to: '/more',
          },
        ],
      },
      {
        title: 'Портфолио',
        to: '/portfolio',
      },
       */
      {
        title: 'Блог',
        to: '/blog',
      },
      {
        title: 'Галерея',
        to: '/gallery',
      },
      /*
      {
        title: 'Галерея',
        items: [
          {
            title: 'Two Columns',
            to: '/gallery-2',
          },
          {
            title: 'Three Columns',
            to: '/gallery-3',
          },
          {
            title: 'Four Columns',
            to: '/gallery-4',
          },
        ],
      },
       */
      {
        title: 'Контакты',
        to: '/contacts',
      },
      /*
      {
        title: 'Категории',
        items: this.categories.map((title: string) => ({
          title,
          to: '/',
        })),
      },
       */
    ],
    latest: [
      {
        itemId: 1,
        title: 'This is just a place holder',
        slug: 'item-1',
        url: '/aricles/item-1',
        date: new Date(2020, 5, 1),
        image: 'https://freewebsitetemplates.com/preview/astronomywebsitetemplate/images/astronaut.jpg',
        text: 'You can remove any link to our website from this website template, you\'re free to use this website template without linking back to us.',
      },
      {
        itemId: 2,
        title: 'This is just a place holder',
        slug: 'item-1',
        url: '/aricles/item-1',
        date: new Date(2020, 5, 1),
        image: 'https://freewebsitetemplates.com/preview/astronomywebsitetemplate/images/earth.jpg',
        text: 'You can remove any link to our website from this website template, you\'re free to use this website template without linking back to us.',
      },
      {
        itemId: 3,
        title: 'This is just a place holder',
        slug: 'item-1',
        url: '/aricles/item-1',
        date: new Date(2020, 5, 1),
        image: 'https://freewebsitetemplates.com/preview/astronomywebsitetemplate/images/spacecraft-small.jpg',
        text: 'You can remove any link to our website from this website template, you\'re free to use this website template without linking back to us.',
      },
      {
        itemId: 4,
        title: 'This is just a place holder',
        slug: 'item-1',
        url: '/aricles/item-1',
        date: new Date(2020, 5, 1),
        image: 'https://freewebsitetemplates.com/preview/astronomywebsitetemplate/images/space-shuttle.jpg',
        text: 'You can remove any link to our website from this website template, you\'re free to use this website template without linking back to us.',
      },
    ],
    social: [
      {
        icon: 'mdi-twitter',
        href: '//twitter.com',
        title: 'Twitter',
      },
      {
        icon: 'mdi-vimeo',
        href: '//vimeo.com',
        title: 'Vimeo',
      },
      {
        icon: 'mdi-youtube',
        href: '//youtube.com',
        title: 'YouTube',
      },
      {
        icon: 'mdi-gitlab',
        href: '//gitlab.com',
        title: 'GitLab',
      },
      {
        icon: 'mdi-facebook',
        href: '//facebook.com',
        title: 'Facebook',
      },
      {
        icon: 'mdi-vk',
        href: '//vk.com',
        title: 'VK',
      },
    ],
    categories: [
      'Игры',
      'Искусство',
      'История',
      'Культура',
      'Луганск',
      'Экономика',
      'Менеджмент',
      'Психология',
      'Миры',
      'Наука',
      'Паранаучное',
      'Природа',
      'Работа',
      'Техника',
      'Цитаты',
      'Юмор',
      'Языки',
    ],
    subcategories: {
      games: [
        'Городские',
        'Дворовые',
        'Интеллектуальные',
        'Карточки',
        'Книги-Игры',
        'Компьютерные',
        'Мафия',
        'Миниатюры',
        'Ролевые',
        'Настольные',
        'Спорт',
        'Эмуляторы',
      ],
      art: [
        'Архитектура',
        'Живопись',
        'Кино',
        'Литература',
        'Музыка',
        'Искусство для чайников',
        'Скульптура',
        'Обманчивая бедность',
        'Мода',
        'Рукоблудие',
      ],
      history: [
        'XX век',
        'Из истории календарей',
        'Политика',
        'Crusader Kings',
        'Год За Годом',
        'Если бы древние цивилизации не исчезли',
        'Поколения',
        'Ветхий завет',
        'Семь Чудес Света',
        'Папа Римский',
        'Пираты',
        'Крестовые Походы',
        'Грозные казни Грозного',
        'Средневековые замки',
        'Факты',
        'Цикл империй',
        'Хронология',
      ],
      culture: [
        'Приусадебное',
        '15 богатейших вымышленных персонажей',
        'Кулинарная книга',
        '5 самых необычных вин',
        'Деликатесы, от мысли о которых может стошнить',
        'Самые необычные парки России',
        'Самые необычные сады и парки',
      ],
      lugansk: [
        'Достопримечательности Луганска',
        'Записки Якирова Посада',
        'История Луганска',
        'Правда о Луганске',
        'Транспорт Луганска',
      ],
      economics: [],
      management: [
        'Задачи',
        'Папки',
        'Разбирать',
        'Ludum Dare',
        'Канва бизнес-модели',
        'Управление проектом',
      ],
      psychology: [],
      worlds: [],
      science: [
        'Астрономия',
        'География',
        'Математика',
        'Физика',
        'Химия',
      ],
      parascience: [
        'Городские легенды',
        'Закон Ципфа',
        'Инопланетяне',
        'Мистика',
        'Деградат',
        'Криптозоология',
        'История',
        'Летающий макаронный монстр и другие пародийные религии',
        'Могла ли Аляска остаться русской',
        'Путешествия во времени',
        'Религия',
        'Тульпа',
        'Тысячеликий герой и мономиф',
        'Философия',
        'Хакеры сновидений',
        'Что делать, если вы... умерли',
      ],
      nature: [
        'Systema Naturae',
        'Логистическое уравнение',
        'Биомы',
        'Ботаника',
        'Геология',
        'Ихтиология',
        'Как появились позвоночные',
        'Необычное',
        'Луганск',
        'Определитель',
        'Палеонтология',
        'Систематика',
        'Фауна Украины в 40 томах',
        'Инфекции',
        'Расы',
        'Топ-12 ошибок в оказании первой помощи',
        'Эволюция животных как серия технологических прорывов',
      ],
      work: [
        'Fireball Games',
        'Мои Программы',
        'ГеймДев',
      ],
      tech: [
        'Военная',
        'Компьютеры',
        'Транспорт',
        'Изобретения',
      ],
      quotes: [
        'Duke Nukem',
        'South Park',
        'Веня Д\'ркин',
        'Магазинчик Бо',
        'Принц Филипп',
        'Сергей Довлатов',
        'Стальная Крыса',
        'Трудно быть богом',
        'Фаина Раневская',
      ],
      humor: [
        'SMS',
        'Абсурдопедия',
        'Анекдоты',
        'Афоризмы',
        'Венгрия',
        'Винни-Пух и Ко',
        'Газета виртуальных объявлений',
        'Говорящие имена',
        'Дизайн',
        'Если бы Первая мировая война была просто дракой в кабаке',
        'Женщины',
        'Загадки',
        'Имена',
        'КВН - разминка',
        'Кино',
        'Китайские кубики',
        'Компьютерное',
        'Котики и т. д.',
        'Кровь, кишки',
        'Лингвистический',
        'Литература',
        'Маски',
        'Музыкальное',
        'Научный',
        'Нигерийские письма',
        'Новое о профессиях',
        'О клиентах',
        'Опись в квартире Агузаровой',
        'Перевод с олбанского',
        'Плашки Луркоморья',
        'Постсоветский',
        'Районы Киева',
        'Реальность нереалестична',
        'Ролевое',
        'Сага о Шушпанчиках',
        'Смешно о дорожных знаках',
        'Студенческое',
        'Суперконцентраты',
        'Техника',
        'Три аргумента за то, что Иисус был...',
        'Устройство моего головного мозга',
        'Фантастика',
        'Хроники',
        'ЧГК',
        'Шахматы глазами бордгеймера',
      ],
      languages: [
        'Индоевропейские',
        'Искусственные',
        'Красота не спасет мир',
        'Ложные друзья переводчика',
        'Машинный перевод',
        'Русский язык',
        'На разных языках',
        'Сленг',
      ],
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    categories,
    music,
  },
};

export default new Vuex.Store<RootState>(store);
