import markdown from '@/music/helpers/markdown';
import { MisheardInterface } from '@/music/store/types';
import { Instrument } from '@/music/types';
import api from './api';

interface MisheardResponse {
  misheard: string[];
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
    .then((items) => items.map((text, misheardId) => ({
      misheardId,
      text,
      html: markdown.makeHtml(text || ''),
    }))),
  getInstruments: (): Promise<Instrument[]> => api.get('instruments')
    .then(({ data }) => data)
    .then((data: InstrumentsResponse) => data.instruments),
  getInstrument: (slug: string): Promise<Instrument | undefined> => api.get(`instruments/${slug}`)
    .then(({ data }) => data)
    .then((data: InstrumentResponse) => data.instrument),
};
