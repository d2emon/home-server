import {readTextFile} from './textfile';
import log from 'winston';

const links = (pages: string[]): string => pages
    .map((page) => `*   [${page}](${encodeURI(page + '.md')})\n`)
    .join('');

export default (path: string, page?: string, pages?: string[]): Promise<string> => readTextFile(
    `${path}${page || ''}.md`,
)
    .then((text) => text.replace('(:childlist:)', links(pages || [])))
    .catch((e) => {
        log.debug(e);
        return '';
    });

