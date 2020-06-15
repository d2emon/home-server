import Showdown from 'showdown';

const config = {
    strikethrough: true,
};

export default new Showdown.Converter(config);
