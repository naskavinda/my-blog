export interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  author: {
    name: string;
    image: string;
  };
}

export const posts: Post[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js',
    content: 'Next.js is a powerful framework for building React applications. It provides features like server-side rendering, static site generation, and more...',
    excerpt: 'Learn the basics of Next.js and how to get started with this powerful framework.',
    date: '2024-03-20',
    author: {
      name: 'John Doe',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John'
    }
  },
  {
    id: '2',
    title: 'Understanding Server-Side Rendering',
    content: 'Server-side rendering (SSR) is a technique where the HTML is generated on the server rather than in the browser...',
    excerpt: 'Deep dive into server-side rendering and its benefits.',
    date: '2024-03-19',
    author: {
      name: 'Jane Smith',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane'
    }
  },
  // Add more posts as needed
];
