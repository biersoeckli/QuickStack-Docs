// source.config.ts
import { defineDocs, frontmatterSchema } from "fumadocs-mdx/config/zod-3";
import { z } from "zod";
var { docs, meta } = defineDocs({
  dir: "content/docs",
  docs: {
    schema: frontmatterSchema.extend({
      keywords: z.union([z.string(), z.array(z.string())]).optional()
    })
  }
});
export {
  docs,
  meta
};
