export interface Misheard {
    misheardId: number;
    text: string;
}

export interface Item {
    slug: string;
    name: string;
    description?: string;
    wiki?: string;
}

export interface Instrument extends Item {
    pages?: string[];
}

export interface Album extends Item {
    /* */
    pages?: string[];
}
