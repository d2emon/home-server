import { Item } from '../types';
import Model from './model';
import wikiHelper from '../helpers/wiki';

class GenreModel extends Model {
    protected static dataFile = '/app/src/data/genres.json';

    protected wikiPath = '/app/markdown/Искусство/Музыка/Стили/';

    public loadPage(page?: string): Promise<string> {
        return wikiHelper(
            this.wikiPath,
            this.name,
        )
    }

    public full(): Promise<Item> {
        return Promise.all([
            this.brief(),
            this.loadPage(this.name),
        ])
            .then(([brief, description]: [Item, string]) => ({
                ...brief,
                description,
                // pages: item.pages,
            }))
    }
}

export default GenreModel;
