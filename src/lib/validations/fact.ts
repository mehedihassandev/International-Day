import { z } from 'zod';

export const FactCategoryEnum = z.enum(['Culture', 'History', 'Nature', 'Art', 'GI Product']);

export const CreateFactSchema = z.object({
  id: z.string().min(2, 'ID slug must be at least 2 characters').trim(),
  title: z.string().min(2, 'Title is required').trim(),
  description: z.string().min(5, 'Description is required').trim(),
  details: z.string().min(10, 'Details are required').trim(),
  category: FactCategoryEnum,
  image: z.string().url('Image must be a valid URL'),
  images: z.array(z.string().url('Each image must be a valid URL')).optional().default([]),
  imagePrompt: z.string().optional().default(''),
  featured: z.boolean().optional().default(false),
});

export const UpdateFactSchema = CreateFactSchema.partial();

export const FactQuerySchema = z.object({
  category: z.string().optional(),
  search: z.string().optional(),
  page: z.coerce.number().int().positive().optional().default(1),
  limit: z.coerce.number().int().positive().max(100).optional().default(50),
  sort: z.enum(['newest', 'oldest', 'title-asc', 'title-desc']).optional().default('newest'),
});

export type CreateFactInput = z.infer<typeof CreateFactSchema>;
export type UpdateFactInput = z.infer<typeof UpdateFactSchema>;
export type FactQueryInput = z.infer<typeof FactQuerySchema>;
