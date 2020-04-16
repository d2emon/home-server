import Vue from 'vue';
import {
  Module,
} from 'vuex';
import { RootState } from '@/store/types';
import musicApi from '@/music/helpers/music';
import { MisheardInterface } from '@/music/store/types';

interface MusicInterface {
  misheard: MisheardInterface[];
}

class MisheardItem implements MisheardInterface {
  misheardId: number;

  text: string;

  constructor(misheardId: number, text: string) {
    this.misheardId = misheardId;
    this.text = text;
  }
}

const music: Module<MusicInterface, RootState> = {
  namespaced: true,
  state: {
    misheard: [],
  },
  mutations: {
    clearMisheard: (state) => Vue.set(state, 'misheard', []),
    addMisheard: (state, payload) => state.misheard.push(payload),
  },
  actions: {
    fetchMisheard: ({
      commit,
    }) => musicApi.getMisheard()
      .then((items: MisheardItem[]) => {
        commit('clearMisheard');
        items.forEach((item) => commit('addMisheard', item));
        return items;
      }),
  },
  modules: {
  },
};

export default music;
