import { DATA, getViewTransitionName } from '@/lib/const';
import '../page.css';
import { notFound } from 'next/navigation';
import { CSSProperties, ViewTransition } from 'react';
import Link from 'next/link';

export default async function Page({ params }: PageProps<'/example-4/[filmId]'>) {
  const { filmId } = await params;
  if (!filmId) {
    notFound();
  }
  const film = DATA.find(obj => obj.id === filmId);
  if (!film) {
    notFound();
  }

  const { description, id, image, minutes, title, year } = film;

  return (
    <section className='am-general-container am-general-container-2'>
      <aside className='left'>
        <ViewTransition name={getViewTransitionName({ suffix: `image-${id}` })}>
          <img src={image} alt='am-img' className='am-img' />
        </ViewTransition>
      </aside>
      <aside className='right'>
        <ViewTransition name={getViewTransitionName({ suffix: `title-${id}` })}>
          <h3 style={{ '--i': 0 } as CSSProperties}>{title}</h3>
        </ViewTransition>
        <ViewTransition name={getViewTransitionName({ suffix: `minutes-${id}` })}>
          <p style={{ '--i': 1 } as CSSProperties}> &#8618; {minutes}min</p>
        </ViewTransition>
        <ViewTransition name={getViewTransitionName({ suffix: `year-${id}` })}>
          <p style={{ '--i': 2 } as CSSProperties}> &#8618; {year}</p>
        </ViewTransition>
        <p style={{ '--i': 3 } as CSSProperties}> &#8618; {description}</p>
        <Link href={'/example-4'}>
          <video
            className='am-close-video'
            src='/assets/close.mp4'
            autoPlay
            muted
            loop
          ></video>
        </Link>
      </aside>
    </section>
  );
}
