import Vue from 'vue';
import {
  Module,
} from 'vuex';
import { RootState } from '@/store/types';
import musicApi from '@/modules/music/helpers/music';
import {
  Instrument,
  InstrumentPageRequest,
  Misheard,
} from '@/modules/music/types';

interface MusicInterface {
  misheard: Misheard[];
  instruments: Instrument[];
  instrument: Instrument | undefined | null;
  instrumentText?: string;
}

const music: Module<MusicInterface, RootState> = {
  namespaced: true,
  state: {
    instruments: [],
    instrument: undefined,
    misheard: [],
    instrumentText: undefined,
  },
  mutations: {
    clearMisheard: (state, payload: Misheard[] = []) => Vue.set(state, 'misheard', payload),
    addMisheard: (state, payload: Misheard) => state.misheard.push(payload),
    clearInstruments: (state, payload: Instrument[] = []) => Vue.set(state, 'instruments', payload),
    addInstrument: (state, payload: Instrument) => state.instruments.push(payload),
    setInstrument: (state, payload: Instrument) => Vue.set(state, 'instrument', payload),
    setInstrumentText: (state, payload?: string) => Vue.set(state, 'instrumentText', payload),
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
      {
        instrument,
        page,
      }: InstrumentPageRequest,
    ) => {
      commit('setInstrument', undefined);
      const promises: [
        Promise<Instrument | null>,
        Promise<string> | null,
      ] = [
        musicApi.getInstrument(instrument),
        page ? musicApi.getPage(instrument, page) : null,
      ];
      return Promise.all(promises)
        .then(([
          item,
          text,
        ]): Instrument | null => {
          commit('setInstrument', item);
          commit('setInstrumentText', text || (item && item.html));
          return item;
        });
    },
  },
  modules: {
  },
};

export default music;
