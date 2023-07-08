module.exports = {
  title: 'tourist-guides-and-copyright', 
  author: 'OGATA Katsuhiro <ogwata@gmail.com>',
  theme: 'themes/theme.css',
  entry: [
    'manuscript.md',
  ],
  output: [
    'book.pdf',
    {
  path: './book',
  format: 'webpub',
      },
  ],
}