import { Article } from '@/types/article';
import markdown from '@/helpers/markdown';
import api from './api';

interface CategoriesResponse {
  categories: Article[];
}

export default {
  getCategories: (): Promise<Article[]> => api.get('/categories')
    .then(({ data }) => data)
    .then((data: CategoriesResponse) => data.categories)
    .then((items) => items.map((article) => ({
      ...article,
      url: `/categories/${article.slug}`,
      html: markdown.makeHtml(article.text || ''),
    }))),
};
