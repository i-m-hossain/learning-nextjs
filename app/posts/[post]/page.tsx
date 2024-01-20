import getSinglePost from '@/lib/getSinglePost';
import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
  params: { post: string };
};
//dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.post;
  const post = await getSinglePost(parseInt(id));
  return {
    title: post.title,
    description: post.body,
  };
}

export default async function SinglePost({ params }: Props) {
  const id = params.post;
  // if (id == '3') {
  //   notFound();
  // }
  type Post = {
    id: number;
    title: string;
    body: string;
  };

  const post: Post = await getSinglePost(parseInt(id));
  return (
    <div>
      <h2>{post.title}</h2>
      <p className='bg-gray-600 p-2 rounded'>{post.body}</p>
    </div>
  );
}
