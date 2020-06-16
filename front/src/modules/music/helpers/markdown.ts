import Showdown from 'showdown';

const config = {
  emoji: true,
  splitAdjacentBlockquotes: true,
  strikethrough: true,
  tables: true,
};

export default new Showdown.Converter(config);
