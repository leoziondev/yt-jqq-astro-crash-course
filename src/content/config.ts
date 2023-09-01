// 1. Import utilities from 'astro:content'
import { defineCollection, z } from 'astro:content';

// 2. Define yout collection(s)
const postsCollection = defineCollection({
    schema: z.object({
        author: z.string(),
        date:   z.string(),
        image:  z.string(),
        title:  z.string(),
    }),
});

export const collections = {
    posts: postsCollection,
};