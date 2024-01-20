import React from 'react';

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className='bg-gray-800 text-white p-4'>
      <p className='text-center'>
        Developed by{' '}
        <a
          href='https://github.com/i-m-hossain'
          target='blank'
          className='text-blue-200'
        >
          Md Imran Hossain
        </a>
      </p>
    </footer>
  );
}
