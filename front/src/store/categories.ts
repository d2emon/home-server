import Vue from 'vue';
import {
  Module,
} from 'vuex';
import { RootState } from '@/store/types';
import categoriesApi from '@/helpers/categories';
import { Article } from '@/types/article';

interface CategoriesInterface {
  categories: Article[];
}

const categories: Module<CategoriesInterface, RootState> = {
  namespaced: true,
  state: {
    categories: [],
  },
  mutations: {
    setCategories: (state, payload: Article[]) => Vue.set(
      state,
      'categories',
      [...payload],
    ),
  },
  actions: {
    fetchCategories: ({ commit }) => categoriesApi
      .getCategories()
      .then((items: Article[]) => {
        commit('setCategories', items);
        return items;
      }),
  },
};

export default categories;
