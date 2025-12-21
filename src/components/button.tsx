'use client';
import '@/styles/button.css';
import Link from 'next/link';
import { CSSProperties, useEffect, ViewTransition } from 'react';

export function Button({
  link,
  name,
  hue,
  style
}: {
  link: string;
  name: string;
  hue: string;
  style?: React.CSSProperties;
}) {
  useEffect(() => {
    const btn = document.querySelector('a.sparkles') as HTMLAnchorElement;

    const timeout1 = setTimeout(() => {
      btn.classList.add('over');
      const timeout2 = setTimeout(() => {
        btn.classList.remove('over');
      }, 2500);
      return () => clearTimeout(timeout2);
    }, 500);

    return () => clearTimeout(timeout1);
  }, [hue]);

  return (
    <ViewTransition name={link}>
      <Link
        className='sparkles'
        href={link}
        style={{ '--clr': hue, ...style } as CSSProperties}
      >
        <span>{name}</span>
      </Link>
    </ViewTransition>
  );
}
