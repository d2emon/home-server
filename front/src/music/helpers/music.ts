import markdown from '@/music/helpers/markdown';
import { MisheardInterface } from '@/music/store/types';
import { Instrument, Misheard } from '@/music/types';
import api from './api';

interface MisheardResponse {
  misheard: Misheard[];
}

interface InstrumentsResponse {
  instruments: Instrument[];
}

interface InstrumentResponse {
  instrument?: Instrument;
}

const makeHtml = (text?: string, path = '') => {
  const prepared = text && text
    .replace(/\[([^\]]*)]\((.*\.md)\)/g, `[$1](${path}$2)`);
  return markdown.makeHtml(prepared || '');
};

export default {
  getMisheard: (): Promise<MisheardInterface[]> => api.get('misheard')
    .then(({ data }) => data)
    .then((data: MisheardResponse) => data.misheard)
    .then((items) => items.map((item) => ({
      ...item,
      html: makeHtml(item.text),
    }))),
  getInstruments: (): Promise<Instrument[]> => api.get('instruments')
    .then(({ data }) => data)
    .then((data: InstrumentsResponse) => data.instruments)
    .then((items) => items.map((item) => ({
      ...item,
      // html: markdown.makeHtml(item.text || ''),
    }))),
  getInstrument: (instrument: string): Promise<Instrument | null> => api
    .get(`instruments/${instrument}`)
    .then(({ data }) => data)
    .then((data: InstrumentResponse) => data.instrument)
    .then((item?: Instrument) => (item
      ? {
        ...item,
        html: makeHtml(item.description, `#/music/instruments/${instrument}/`),
      }
      : null
    )),
  getPage: (instrument: string, page: string): Promise<string> => api
    .get(`instruments/${instrument}/${page}.md`)
    .then(({ data }) => data)
    .then((text) => makeHtml(text, `#/music/instruments/${instrument}/`)),
};
