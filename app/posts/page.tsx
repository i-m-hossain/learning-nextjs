import getAllPosts from '@/lib/getAllPosts';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

type Props = {};
export const metadata: Metadata = {
  title: 'Posts',
  description: 'this is posts page',
};
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function Posts({}: Props) {
  const posts = await getAllPosts();
  return (
    <div>
      <h1 className='pb-4'>All posts</h1>
      <ul>
        {posts.map((post: Post) => (
          <li className='mb-2 py-2'>
            <Link href={`/posts/${post.id}`}>
              {post.id}: {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
