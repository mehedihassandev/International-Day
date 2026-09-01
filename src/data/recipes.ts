export interface Recipe {
    id: string;
    title: string;
    description: string;
    category?: string;
    ingredients: string[];
    instructions: string[];
    serves?: string;
    prepTime?: string;
    image: string;
    images?: string[];
    imagePrompt: string;
}

// Static dummy data removed. All data is dynamically fetched from MongoDB Atlas.
export const recipes: Recipe[] = [];
