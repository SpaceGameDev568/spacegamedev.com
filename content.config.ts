// src/content.config.ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
	// Use a loader to tell Astro where the files are
	loader: glob({ pattern: "**/*.mdx", base: "./src/posts" }),
	schema: ({ image }) => z.object({
		title: z.string(),
		// Now you can use image()
		cover: image(),
	}),
});

export const collections = {
	blog: blog,
};