import { z } from 'zod';

export const CreateRecipeSchema = z.object({
  id: z.string().min(2, 'ID slug must be at least 2 characters').trim(),
  title: z.string().min(2, 'Title is required').trim(),
  description: z.string().min(5, 'Description is required').trim(),
  category: z.string().optional().default('General'),
  ingredients: z.array(z.string().min(1, 'Ingredient cannot be empty')).min(1, 'At least one ingredient is required'),
  instructions: z.array(z.string().min(1, 'Instruction cannot be empty')).min(1, 'At least one instruction is required'),
  serves: z.string().optional(),
  prepTime: z.string().optional(),
  image: z.string().url('Image must be a valid URL'),
  images: z.array(z.string().url('Each image must be a valid URL')).optional().default([]),
  imagePrompt: z.string().optional().default(''),
  featured: z.boolean().optional().default(false),
});

export const UpdateRecipeSchema = CreateRecipeSchema.partial();

export const RecipeQuerySchema = z.object({
  category: z.string().optional(),
  search: z.string().optional(),
  page: z.coerce.number().int().positive().optional().default(1),
  limit: z.coerce.number().int().positive().max(100).optional().default(50),
  sort: z.enum(['newest', 'oldest', 'title-asc', 'title-desc']).optional().default('newest'),
});

export type CreateRecipeInput = z.infer<typeof CreateRecipeSchema>;
export type UpdateRecipeInput = z.infer<typeof UpdateRecipeSchema>;
export type RecipeQueryInput = z.infer<typeof RecipeQuerySchema>;
