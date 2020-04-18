import { readJsonFile } from '../helpers/jsonfile';
import { readTextFile } from '../helpers/textfile';
import { Instrument } from '../types';

const wikiPath = '/app/src/data/instruments';

const instruments = (): Promise<Instrument[]> => readJsonFile('/app/src/data/instruments.json');

const links = (pages: string[]): string => pages
    .map((page) => `*   [${page}](${encodeURI(page + '.md')})\n`)
    .join('');

const wiki = (slug: string, page: string, pages: string[] = []): Promise<string> => readTextFile(
    `${wikiPath}/${slug}/${page}.md`,
)
    .then((text) => text.replace('(:childlist:)', links(pages)))
    .catch(() => '');

const brief = (item: Instrument): Instrument => ({
    slug: item.slug,
    name: item.name,
});

const full = (item: Instrument | null): Promise<Instrument | null> => item && wiki(item.slug, 'index', item.pages)
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
        .then((item) => wiki(slug, page, item && item.pages)),
}

export default InstrumentModel;
