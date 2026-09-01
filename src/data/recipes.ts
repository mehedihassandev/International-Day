export interface Recipe {
  id: string;
  title: string;
  description: string;
  category: string;
  prepTime: string;
  serves: string;
  ingredients: string[];
  instructions: string[];
  image: string;
  imagePrompt?: string;
  images?: string[];
  createdAt?: string;
  updatedAt?: string;
  _id?: string;
}

