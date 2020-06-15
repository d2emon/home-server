interface MovieGenre {
  name: string;
}

interface Studio {
  name: string;
}

interface Director {
  name: string;
}

interface Actor {
  name: string;
}

interface Movie {
  title: string;
  year: number;
  genre: MovieGenre;
  studio: Studio;
  directors: Director[];
  actors: Actor[];
  length: number;
  description: string;
}
