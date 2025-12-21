'use client';
import '@/styles/button.css';
import { CSSProperties, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

function ButtonComponent({ link, name }: { link: string; name: string }) {
  const [clr] = useState(() => {
    const hue = Math.floor(Math.random() * 360);
    return hue;
  });

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
  }, [clr]);

  return (
    <a className='sparkles' href={link} style={{ '--clr': clr } as CSSProperties}>
      <span>{name}</span>
    </a>
  );
}

export const Button = dynamic(async () => ButtonComponent, { ssr: false });
