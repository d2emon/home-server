import config from '../config';

export default () => new Promise((resolve) => {
    const categories = require(config.get('categoriesPath'));
    return resolve(categories);
});
