'use client';
import { getRandomGradient } from '@/lib/randomGradient';
import './page.css';
import { startTransition, useRef, useState, ViewTransition } from 'react';
const data = Array.from({ length: 5 }, (_, i) => i + 1);

export function AmRow({
  valueVideo,
  ref
}: {
  valueVideo: number;
  ref: (el: HTMLElement) => void;
}) {
  return (
    <section className='am-row' ref={ref}>
      <aside className='left-rectangle'></aside>
      <article className='right-part'>
        <h2>Video {valueVideo}</h2>
        <p>Description Video</p>
      </article>
    </section>
  );
}

export default function Page() {
  const arrayOfRefs = useRef<HTMLElement[]>([]);
  const [listOfData, setListOfData] = useState(data);

  function reorder() {
    startTransition(() => {
      setListOfData(prev => [...prev.sort(() => Math.random() - 0.5)]);
    });
  }

  return (
    <main className='page'>
      <aside className='container-center'>
        <section className='top'>
          <button className='am-button' onClick={reorder}>
            🎲
          </button>
        </section>
        <section className='bottom'>
          {listOfData.map(value => (
            <ViewTransition key={value}>
              <AmRow
                valueVideo={value}
                ref={async (el: HTMLElement) => {
                  if (arrayOfRefs.current.length === 5) return;
                  arrayOfRefs.current[value - 1] = el;
                  const gradient = await getRandomGradient(value);
                  el.style.setProperty('--bg', gradient);
                }}
              />
            </ViewTransition>
          ))}
        </section>
      </aside>
    </main>
  );
}
