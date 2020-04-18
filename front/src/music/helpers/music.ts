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

export default {
  getMisheard: (): Promise<MisheardInterface[]> => api.get('misheard')
    .then(({ data }) => data)
    .then((data: MisheardResponse) => data.misheard)
    .then((items) => items.map((item) => ({
      ...item,
      html: markdown.makeHtml(item.text || ''),
    }))),
  getInstruments: (): Promise<Instrument[]> => api.get('instruments')
    .then(({ data }) => data)
    .then((data: InstrumentsResponse) => data.instruments)
    .then((items) => items.map((item) => ({
      ...item,
      // html: markdown.makeHtml(item.text || ''),
    }))),
  getInstrument: (slug: string): Promise<Instrument | null> => api.get(`instruments/${slug}`)
    .then(({ data }) => data)
    .then((data: InstrumentResponse) => data.instrument)
    .then((item?: Instrument) => {
      // tslint:disable-next-line
      console.log(item);
      return item;
    })
    .then((item?: Instrument) => item
      ? {
        ...item,
        html: markdown.makeHtml(item.description || ''),
      }
      : null
    ),
};
