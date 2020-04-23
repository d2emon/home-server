import {Album, Item} from '../types';
import { readJsonFile } from '../helpers/jsonfile';
import wikiHelper from '../helpers/wiki';

class Model implements Item {
    protected static dataFile = '/app/src/data/index.json';

    protected wikiPath = '/app/markdown';

    public slug: string;

    public name: string;

    public description?: string;

    public wiki?: string;

    public constructor(item: Item) {
        this.name = item.name;
        this.slug = item.slug;
        this.description = item.description;
        this.wiki = item.wiki;
    }

    public loadPage(page?: string): Promise<string> {
        return wikiHelper(
            `${this.wikiPath}/${this.name}/`,
            page || 'index',
        )
    }

    public brief(): Promise<Item> {
        return Promise.resolve({
            slug: this.slug,
            name: this.name,
        });
    }

    public full(): Promise<Item> {
        return Promise.all([
            this.brief(),
            this.loadPage('index'),
        ])
            .then(([brief, description]: [Album, string]) => ({
                ...brief,
                description,
                // pages: item.pages,
            }))
    }

    public static items(): Promise<Model[]> {
        return readJsonFile(this.dataFile)
            .then((items: Item[]) => items.map(item => new this(item)));
    }

    public static search(slug: string): Promise<Model | null> {
        return this.items()
            .then((items) => items.find(item => (item.slug === slug)));
    }

    public static all(): Promise<Item[]> {
        return this.items()
            .then((items) => items.map(item => item.brief()))
            .then(items => Promise.all(items))
    }

    public static item(slug: string): Promise<Item | null> {
        return this.search(slug)
            .then((item) => item && item.full());
    }

    public static page(slug: string, page?: string): Promise<string | null> {
        return this.search(slug)
            .then((item) => item && item.loadPage(page));
    }
}

export default Model;
