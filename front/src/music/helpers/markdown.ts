import Showdown from 'showdown';

const config = {
  splitAdjacentBlockquotes: true,
  strikethrough: true,
};

export default new Showdown.Converter(config);
