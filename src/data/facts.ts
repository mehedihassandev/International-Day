export interface Fact {
  id: string;
  title: string;
  description: string;
  category: 'History' | 'Culture' | 'Nature' | 'Art' | 'GI Product';
  details: string;
  image: string;
  imagePrompt?: string;
  images?: string[];
  featured?: boolean;
  createdAt?: string;
  updatedAt?: string;
  _id?: string;
}

