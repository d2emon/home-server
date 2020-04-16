import Vue from 'vue';
import {
  Module,
} from 'vuex';
import { RootState } from '@/store/types';
import musicApi from '@/music/helpers/music';
import { MisheardInterface } from '@/music/store/types';
import {Instrument} from "@/music/types";

interface MusicInterface {
  misheard: MisheardInterface[];
  instruments: Instrument[];
  instrument?: Instrument;
}

const music: Module<MusicInterface, RootState> = {
  namespaced: true,
  state: {
    misheard: [],
    instruments: [],
    instrument: undefined,
  },
  mutations: {
    clearMisheard: (state, payload: MisheardInterface[] = []) => Vue.set(state, 'misheard', payload),
    addMisheard: (state, payload: MisheardInterface) => state.misheard.push(payload),
    clearInstruments: (state, payload: Instrument[] = []) => Vue.set(state, 'instruments', payload),
    addInstrument: (state, payload: Instrument) => state.instruments.push(payload),
    setInstrument: (state, payload: Instrument) => Vue.set(state, 'instrument', payload),
  },
  actions: {
    fetchMisheard: ({
      commit,
    }) => musicApi.getMisheard()
      .then((items: MisheardInterface[]) => {
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
    ) => musicApi.getInstrument(slug)
      .then((item?: Instrument): Instrument | undefined => {
        commit('setInstrument', item);
        return item;
      }),
  },
  modules: {
  },
};

export default music;
