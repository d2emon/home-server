export interface Instrument {
  slug: string;
  name: string;
  image?: string;
  description?: string;
  html?: string;
}

export interface Misheard {
  misheardId: number;
  text: string;
  html?: string;
}
