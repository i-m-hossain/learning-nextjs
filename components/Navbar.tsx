import config from '@/config/config';
import Link from 'next/link';
import React from 'react';

type Props = {};

export default function Navbar({}: Props) {
  return (
    <header className='flex justify-between bg-gray-800 text-white p-4'>
      <h2>
        <Link href={'/'}>{config.websiteTitle}</Link>
      </h2>
      <div>
        <button>Logout</button>
      </div>
    </header>
  );
}
