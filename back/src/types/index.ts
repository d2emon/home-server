export interface Misheard {
    misheardId: number;
    text: string;
}

export interface Item {
    slug: string;
    name: string;
    description?: string;
    wiki?: string;
    pages?: string[];
}
