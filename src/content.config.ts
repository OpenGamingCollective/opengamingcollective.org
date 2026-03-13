import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const governance = defineCollection({
  loader: glob({
    base: "./src/content/governance",
    pattern: "**/*.md"
  })
});

export const collections = {
  governance
};
