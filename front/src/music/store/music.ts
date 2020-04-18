import Vue from 'vue';
import {
  Module,
} from 'vuex';
import { RootState } from '@/store/types';
import musicApi from '@/music/helpers/music';
import {
  Instrument,
  Misheard,
} from '@/music/types';

interface MusicInterface {
  misheard: Misheard[];
  instruments: Instrument[];
  instrument: Instrument | undefined | null;
}

const music: Module<MusicInterface, RootState> = {
  namespaced: true,
  state: {
    misheard: [],
    instruments: [],
    instrument: undefined,
  },
  mutations: {
    clearMisheard: (state, payload: Misheard[] = []) => Vue.set(state, 'misheard', payload),
    addMisheard: (state, payload: Misheard) => state.misheard.push(payload),
    clearInstruments: (state, payload: Instrument[] = []) => Vue.set(state, 'instruments', payload),
    addInstrument: (state, payload: Instrument) => state.instruments.push(payload),
    setInstrument: (state, payload: Instrument) => Vue.set(state, 'instrument', payload),
  },
  actions: {
    fetchMisheard: ({
      commit,
    }) => musicApi.getMisheard()
      .then((items: Misheard[]) => {
        commit('clearMisheard');
        items.forEach((item) => commit('addMisheard', item));
        return items;
      }),
    fetchInstruments: ({
      commit,
    }) => musicApi.getInstruments()
      .then((items: Instrument[]) => {
        commit('clearInstruments');
        items.forEach((item) => commit('addInstrument', item));
        return items;
      }),
    fetchInstrument: (
      {
        commit,
      },
      slug,
    ) => {
      commit('setInstrument', undefined);
      return musicApi.getInstrument(slug)
        .then((item: Instrument | null): Instrument | null => {
          commit('setInstrument', item);
          return item;
        });
    },
  },
  modules: {
  },
};

export default music;
