import { getNormalizedPost } from "~/utils/getNormalizedPost";

const load = async function () {
  const posts = import.meta.glob("~/data/posts/**/*.{md,mdx}", {
    eager: true,
  });

  const normalizedPosts = Object.keys(posts).map(async (key) => {
    const post = await posts[key];
    return await getNormalizedPost(post);
  });

  const results = (await Promise.all(normalizedPosts)).sort(
    (a, b) => new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf()
  );
  return results;
};

let _posts:{
  pubDate: any;
  canonical: any;
  slug: any;
  title: any;
  description: any;
  body: any;
  image: any;
  excerpt: any;
  authors: any;
  category: any;
  tags: any;
  readingTime: number;
}[];

export const fetchPosts = async () => {
  _posts = _posts || await load();

  return await _posts;
};
