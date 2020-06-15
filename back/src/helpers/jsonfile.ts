export const readJsonFile = (filename: string): Promise<any> => Promise.resolve(require(filename));
