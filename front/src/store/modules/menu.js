const state = {
  title: 'Языки',
  subtitle: 'Полезно иногда знать иностранные языки.',
  pages: [
    { title: 'Главная', icon: 'mdi-home', to: '/' },
    { title: 'Группы', icon: 'mdi-file-tree', to: '/groups', menu: true },
    { title: 'Индоевропейские языки', icon: 'mdi-folder', to: '/group/indo-european' },
    {
      title: 'Искусственные',
      icon: 'mdi-folder',
      to: '/conlangs',
      menu: true,
    },
    {
      title: 'Фразеологизмы',
      // title: 'Красота не спасет мир',
      icon: 'mdi-folder',
      to: '/phraseology',
      menu: true,
    },
    {
      title: 'Ложные друзья переводчика',
      icon: 'mdi-folder',
      to: '/translate',
      menu: true,
    },
    {
      title: 'Машинный перевод',
      icon: 'mdi-folder',
      to: '/machine-translate',
      menu: true,
    },
    { title: 'Русский язык', icon: 'mdi-folder', to: '/russian' },
    {
      title: 'На разных языках',
      icon: 'mdi-folder',
      to: '/translations',
      menu: true,
    },
    {
      title: 'Сленг',
      icon: 'mdi-folder',
      to: '/slangs',
      menu: true,
    },
    { title: 'О нас', icon: 'mdi-folder', to: '/about', menu: true },
  ],
  items: [
    {
      icon: 'mdi-folder',
      iconClass: 'grey lighten-1 white--text',
      title: 'Photos',
      subtitle: 'Jan 9, 2014',
    },
    {
      icon: 'mdi-folder',
      iconClass: 'grey lighten-1 white--text',
      title: 'Recipes',
      subtitle: 'Jan 17, 2014',
    },
    {
      icon: 'mdi-folder',
      iconClass: 'grey lighten-1 white--text',
      title: 'Work',
      subtitle: 'Jan 28, 2014',
    },
  ],
  items2: [
    {
      icon: 'mdi-clipboard-text',
      iconClass: 'blue white--text',
      title: 'Vacation itinerary',
      subtitle: 'Jan 20, 2014',
    },
    {
      icon: 'mdi-card-text',
      iconClass: 'amber white--text',
      title: 'Kitchen remodel',
      subtitle: 'Jan 10, 2014',
    },
    {
      icon: 'mdi-pirate',
      iconClass: 'amber white--text',
      title: 'Kitchen remodel',
      subtitle: 'Jan 10, 2014',
    },
  ],
  // ----
  // articles: require('@/data/articles.json'),
  drawer: false,
};

const getters = {
  /*
  categories: state => {
    const categories = []

    for (const article of state.articles) {
      if (
        !article.category ||
        categories.find(category => category.text === article.category)
      ) continue

      const text = article.category

      categories.push({
        text,
        to: `/category/${text}`
      })
    }

    return categories.sort().slice(0, 4)
  },
  */
  links: state => state.pages.filter(page => page.menu),
};

const mutations = {
  setDrawer: (state, payload) => (state.drawer = payload),
  toggleDrawer: state => (state.drawer = !state.drawer),
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
