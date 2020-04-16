import { readJsonFile } from '../helpers/jsonfile';

const misheard = (): Promise<string[]> => readJsonFile('/app/src/data/misheard.json');

const Misheard = {
    all: (): Promise<string[]> => misheard(),
}

export default Misheard;
