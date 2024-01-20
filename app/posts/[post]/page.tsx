import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
  params: { post: string };
};

export default function SinglePost({ params }: Props) {
  const { post } = params;
  if (post == '3') {
    notFound();
  }
  return <div>SinglePost - {post}</div>;
}
