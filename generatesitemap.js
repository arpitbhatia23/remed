import fs from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/#about', changefreq: 'weekly', priority: 0.7 },
  { url: '/#services', changefreq: 'weekly', priority: 0.7 },
  { url: '/#contact us', changefreq: 'weekly', priority: 0.7 },
  // Add more routes as necessary
];

const stream = new SitemapStream({ hostname: 'https://remed-research.vercel.app/' });

// Convert links to a readable stream and pipe to SitemapStream
Readable.from(links).pipe(stream);

// Write sitemap.xml to the public directory
streamToPromise(stream)
  .then((data) => fs.writeFileSync('public/sitemap.xml', data.toString()))
  .catch((err) => {
    console.error('Error generating sitemap:', err);
    process.exit(1);
  });
