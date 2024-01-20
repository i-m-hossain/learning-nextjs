import getSinglePost from '@/lib/getSinglePost';
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
  params: { post: string };
};

export default async function SinglePost({ params }: Props) {
  const { post: id } = params;
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
