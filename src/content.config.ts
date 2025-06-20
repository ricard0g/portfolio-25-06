import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const blogCollection = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: "./src/content/posts",
	}),
	schema: z.object({
		slug: z.string(),
		title: z.string(),
		pubDate: z.string(),
		updateDate: z.string().optional(),
		tags: z.array(z.string()),
		author: z.string(),
		image: z.string().optional(),
		description: z.string(),
	}),
});

export const collections = { blogCollection };