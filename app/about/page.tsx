import React from 'react';
import image from '@/public/images/pro-pic.png';
import Image from 'next/image';
type Props = {};

export default function About({}: Props) {
  // throw new Error('an error happened');
  return (
    <div>
      <Image src={image} alt='pro-pic' placeholder='blur' />
    </div>
  );
}
