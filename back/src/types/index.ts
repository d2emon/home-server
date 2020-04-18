export interface Misheard {
    misheardId: number;
    text: string;
}

export interface Instrument {
    slug: string;
    name: string;
    description?: string;
    wiki?: string;
    pages?: string[];
}
