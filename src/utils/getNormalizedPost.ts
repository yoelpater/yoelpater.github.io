import getReadingTime from "reading-time";
import type { Post } from "./post";

export const getNormalizedPost = async (rawPost): Promise<Post> => {
  const { frontmatter, compiledContent, rawContent, file } = rawPost;

  return {
    pubDate: frontmatter.pubDate,

    canonical: frontmatter.canonical,
    slug: file.split("/").pop().split(".").shift(),

    title: frontmatter.title,
    description: frontmatter.description,
    body: compiledContent(),
    image: frontmatter.image,

    excerpt: frontmatter.excerpt,
    authors: frontmatter.authors,
    category: frontmatter.category,
    tags: frontmatter.tags,
    readingTime: Math.ceil(getReadingTime(rawContent()).minutes),
  };
};
