import { MisheardInterface } from '@/music/store/types';
import markdown from '@/music/helpers/markdown';
import api from './api';

interface MisheardResponse {
  misheard: string[];
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
};
