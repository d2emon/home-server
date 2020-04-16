interface BookGenre {
  name: string;
}

interface Author {
  name: string;
}

interface Language {
  name: string;
}

interface Literature {
  title: string;
  author: Author;
  genre: BookGenre;
  language: Language;
  year: number;
  description: string;
}
