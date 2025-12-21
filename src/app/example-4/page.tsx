'use client';
import { DATA, getViewTransitionName } from '@/lib/const';
import './page.css';
import Link from 'next/link';
import { ViewTransition } from 'react';

export default function Page() {
  return (
    <section className='am-general-container'>
      <header className='top-general'>
        <aside className='hamburguer'></aside>
        <aside className='title'>
          <h2>DAILY</h2>
          <h3>UI</h3>
        </aside>
        <aside className='magnificent-glass'></aside>
      </header>
      <h3 className='am-title'>Most Popular Movies</h3>
      <aside className='am-your-container-cards'>
        {DATA.map(({ image, title, minutes, year, id }, i) => (
          <article key={i} className='card'>
            <Link href={`/example-4/${id}`}>
              <ViewTransition
                name={getViewTransitionName({ suffix: `image-${id}` })}
              >
                <img src={image} alt='am-img' className='am-img' />
              </ViewTransition>
            </Link>

            <ViewTransition
              name={getViewTransitionName({ suffix: `title-${id}` })}
            >
              <h3>{title}</h3>
            </ViewTransition>
            <ViewTransition
              name={getViewTransitionName({ suffix: `minutes-${id}` })}
            >
              <p> &#8618; {minutes}min</p>
            </ViewTransition>
            <ViewTransition
              name={getViewTransitionName({ suffix: `year-${id}` })}
            >
              <p> &#8618; {year}</p>
            </ViewTransition>
          </article>
        ))}
      </aside>
    </section>
  );
}
