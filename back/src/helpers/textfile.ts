import fs from 'fs';

export const readTextFile = (filename: string): Promise<string> => new Promise<string | null>(
    (resolve, reject) => filename
        ? fs.readFile(
            filename,
            'utf8',
            (error, data) => error ? reject(error) : resolve(data),
        )
        : resolve(''),
);
