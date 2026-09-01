import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IRecipe extends Document {
  id: string;
  title: string;
  description: string;
  category?: string;
  ingredients: string[];
  instructions: string[];
  serves?: string;
  prepTime?: string;
  image: string;
  images: string[];
  imagePrompt?: string;
  featured?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const RecipeSchema: Schema<IRecipe> = new Schema(
  {
    id: {
      type: String,
      required: [true, 'Unique slug/ID is required'],
      unique: true,
      trim: true,
      index: true,
    },
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
    },
    category: {
      type: String,
      default: 'Popular Snacks',
      index: true,
    },
    ingredients: {
      type: [String],
      required: [true, 'Ingredients are required'],
      default: [],
    },
    instructions: {
      type: [String],
      required: [true, 'Instructions are required'],
      default: [],
    },
    serves: {
      type: String,
      default: '',
    },
    prepTime: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      required: [true, 'Image URL is required'],
      trim: true,
    },
    images: {
      type: [String],
      default: [],
    },
    imagePrompt: {
      type: String,
      default: '',
    },
    featured: {
      type: Boolean,
      default: false,
      index: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (_doc, ret: Record<string, any>) => {
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

// Add text index for fast search queries
RecipeSchema.index({ title: 'text', description: 'text' });
RecipeSchema.index({ category: 1, createdAt: -1 });

export const Recipe: Model<IRecipe> =
  mongoose.models.Recipe || mongoose.model<IRecipe>('Recipe', RecipeSchema);

export default Recipe;
