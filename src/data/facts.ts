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

// Static dummy data removed. All data is dynamically fetched from MongoDB Atlas.
export const facts: Fact[] = [];
