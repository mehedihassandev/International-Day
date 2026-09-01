import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IFact extends Document {
  id: string;
  title: string;
  description: string;
  details: string;
  category: 'Culture' | 'History' | 'Nature' | 'Art' | 'GI Product';
  image: string;
  images: string[];
  imagePrompt?: string;
  featured?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const FactSchema: Schema<IFact> = new Schema(
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
    details: {
      type: String,
      required: [true, 'Details are required'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: ['Culture', 'History', 'Nature', 'Art', 'GI Product'],
      index: true,
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
FactSchema.index({ title: 'text', description: 'text', details: 'text' });
FactSchema.index({ category: 1, createdAt: -1 });

export const Fact: Model<IFact> =
  mongoose.models.Fact || mongoose.model<IFact>('Fact', FactSchema);

export default Fact;
