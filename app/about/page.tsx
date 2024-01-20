import React from 'react';
import image from '@/public/images/pro-pic.png';
import Image from 'next/image';
import { Metadata } from 'next';
type Props = {};
export const metadata: Metadata = {
  title: 'About',
  description: 'this is about page',
};
export default function About({}: Props) {
  // throw new Error('an error happened');
  return (
    <div>
      <Image src={image} alt='pro-pic' placeholder='blur' />
    </div>
  );
}
