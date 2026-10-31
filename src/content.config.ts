import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		lang: z.enum(['en', 'es']),
		urlSlug: z.string(),
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		tags: z.array(z.string()).default([]),
		translationKey: z.string().optional(),
	}),
});

export const collections = { blog };