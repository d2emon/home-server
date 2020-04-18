import { readJsonFile } from '../helpers/jsonfile';
import { readTextFile } from '../helpers/textfile';
import { Instrument } from '../types';

const wikiPath = '/app/markdown/Искусство/Музыка/Инструменты';

const instruments = (): Promise<Instrument[]> => readJsonFile('/app/src/data/instruments.json');

const links = (pages: string[]): string => pages
    .map((page) => `*   [${page}](${encodeURI(page + '.md')})\n`)
    .join('');

const wiki = (item: Instrument, page?: string): Promise<string> => readTextFile(
    `${wikiPath}/${item.name}/${page || 'index'}.md`,
)
    .then((text) => text.replace('(:childlist:)', links(item.pages || [])))
    .catch(() => '');

const brief = (item: Instrument): Instrument => ({
    slug: item.slug,
    name: item.name,
});

const full = (item: Instrument | null): Promise<Instrument | null> => item && wiki(item)
    .then((description) => ({
        ...brief(item),
        description,
        pages: item.pages,
    }));

const search = (slug: string) => (item: Instrument) => (item.slug === slug);

const InstrumentModel = {
    all: (): Promise<Instrument[]> => instruments()
        .then((items) => items.map(brief)),
    get: (slug: string): Promise<Instrument | null> => instruments()
        .then((items) => items.find(search(slug)))
        .then(full),
    page: (slug: string, page: string): Promise<string> => instruments()
        .then((items) => items.find(search(slug)))
        .then((item) => wiki(item, page)),
}

export default InstrumentModel;
