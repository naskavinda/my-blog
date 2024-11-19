import { posts } from '@/data/posts';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">My Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article 
            key={post.id} 
            className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <Link href={`/posts/${post.id}`}>
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="text-gray-600">{post.author.name}</span>
              </div>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <time className="text-sm text-gray-500">{post.date}</time>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
