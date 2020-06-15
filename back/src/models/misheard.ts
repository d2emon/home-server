import { readJsonFile } from '../helpers/jsonfile';
import { Misheard } from '../types';

const misheard = (): Promise<string[]> => readJsonFile('/app/src/data/misheard.json');

const brief = (text: string, misheardId: number): Misheard => ({
    misheardId,
    text,
});

const Misheard = {
    all: (): Promise<Misheard[]> => misheard()
        .then((item) => item.map(brief)),
}

export default Misheard;
