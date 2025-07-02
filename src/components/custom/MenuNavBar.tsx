'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export function MenuNavBar() {
  const router = useRouter();
  return (
    <nav>
      <ul className="flex space-x-4 *:hover:text-blue-500 *:hover:underline *:hover:underline-offset-2">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/blog">
          <li>Blog</li>
        </Link>
      </ul>
    </nav>
  );
}
