import wikiHelper from '../helpers/wiki';
import Model from './model';
import { Item } from '../types';

class InstrumentModel extends Model {
    protected static dataFile = '/app/src/data/instruments.json';

    protected wikiPath = '/app/markdown/Искусство/Музыка/Инструменты/';

    public loadPage(page?: string): Promise<string> {
        return wikiHelper(
            `${this.wikiPath}${this.name}/`,
            page || 'index',
        )
    }

    public full(): Promise<Item> {
        return Promise.all([
            this.brief(),
            this.loadPage('index'),
        ])
            .then(([brief, description]: [Item, string]) => ({
                ...brief,
                description,
                pages: this.pages,
            }))
    }
}

export default InstrumentModel;
