export const post = {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    { name: 'title', title: 'Post Title', type: 'string' },
    { name: 'slug', title: 'URL Slug', type: 'slug', options: { source: 'title' } },
    { name: 'desc', title: 'Short Description (Excerpt)', type: 'text' },
    { name: 'img', title: 'Cover Image', type: 'image', options: { hotspot: true } },
    { name: 'date', title: 'Publish Date', type: 'date', options: { dateFormat: 'MMMM D, YYYY' } },
    { name: 'read', title: 'Read Time (e.g., "5 min")', type: 'string' },
    { name: 'content', title: 'Full Blog Article Content', type: 'array', of: [{ type: 'block' }, { type: 'image' }] },
  ],
};