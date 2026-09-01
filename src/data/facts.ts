import { initialFacts } from '@/scripts/seed-data';

export interface Fact {
    id: string;
    title: string;
    description: string;
    details: string;
    category: "Culture" | "History" | "Nature" | "Art" | "GI Product";
    image: string;
    images?: string[];
    imagePrompt: string;
}

export const facts: Fact[] = initialFacts;

