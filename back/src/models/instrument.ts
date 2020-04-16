import { readJsonFile } from '../helpers/jsonfile';
import { readTextFile } from '../helpers/textfile';
import { InstrumentInterface } from '../types';

const instruments = (): Promise<InstrumentInterface[]> => readJsonFile('/app/src/data/instruments.json');

const brief = (item: InstrumentInterface): InstrumentInterface => ({
    slug: item.slug,
    name: item.name,
});

const full = (item: InstrumentInterface | null): Promise<InstrumentInterface | null> => item && readTextFile(item.wiki)
    .then((description) => ({
        ...brief(item),
        description,
    }));

const search = (slug: string) => (item: InstrumentInterface) => (item.slug === slug);

const Instrument = {
    all: (): Promise<InstrumentInterface[]> => instruments()
        .then((items) => items.map(brief)),
    get: (slug: string): Promise<InstrumentInterface | null> => instruments()
        .then((items) => items.find(search(slug)))
        .then(full),
}

export default Instrument;
