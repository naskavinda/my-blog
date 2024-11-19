import { posts } from '@/data/posts';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{
    id: string
  }>
}

export default async function BlogPost({ params }: Props) {
  const { id } = await params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen p-8 max-w-3xl mx-auto">
      <Link href="/" className="text-blue-500 hover:underline mb-8 block">
        ← Back to Home
      </Link>
      
      <article>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        
        <div className="flex items-center gap-3 mb-8">
          <Image
            src={post.author.image}
            alt={post.author.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold">{post.author.name}</p>
            <time className="text-gray-500">{post.date}</time>
          </div>
        </div>

        <div className="prose lg:prose-xl">
          {post.content}
        </div>
      </article>
    </main>
  );
}
