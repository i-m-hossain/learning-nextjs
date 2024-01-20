import Link from 'next/link';
import React from 'react';

type Props = {};
const routeList = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Posts', path: '/posts' },
];
const isLastMenuChild = (index: number, totalRoutes: number): boolean =>
  index !== totalRoutes - 1;

export default function Sidebar({}: Props) {
  return (
    <aside className='w-1/6 md:w-1/12  bg-gray-900 pt-6 pl-4 text-white'>
      <ul className='flex flex-col gap-4'>
        {routeList.map((route, i) => (
          <Link href={route.path} key={route.name}>
            <li
              className={`inline-block ${
                isLastMenuChild(i, routeList.length) ? 'border-b-2' : ''
              } pb-4 hover:text-lg transition-all`}
            >
              {route.name}
            </li>
          </Link>
        ))}
      </ul>
    </aside>
  );
}
