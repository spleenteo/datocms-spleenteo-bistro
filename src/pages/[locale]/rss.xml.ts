import { getRssString } from '@astrojs/rss';
import { fetchPosts } from '~/utils/blog';
import { SITE, METADATA, APP_BLOG } from 'astrowind:config';


export const GET = async () => {
  const posts = await fetchPosts(); // Your post fetchin logic
  if (!APP_BLOG.isEnabled) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found',
    });
  }

  const rss = await getRssString({
    title: `${SITE.name}’s Blog`,
    description: METADATA?.description || '',
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      link: post.url,
      title: post.title,
      description: post.excerpt,
      pubDate: post.date,
    })),
  });

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};