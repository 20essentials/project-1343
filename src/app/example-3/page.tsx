'use client';
import { ViewTransition, useState, startTransition, Suspense } from 'react';
import { Video, VideoPlaceholder } from './Video';
import { useLazyVideoData } from './data';
import './page.css';

function LazyVideo() {
  const videoData = useLazyVideoData();
  return <Video data={videoData} />;
}

export function Component() {
  const [showItem, setShowItem] = useState(false);
  return (
    <>
      <button
        className='am-button-open'
        onClick={() => {
          startTransition(() => {
            setShowItem(prev => !prev);
          });
        }}
      >
        {showItem ? '➖' : '➕'}
      </button>
      {showItem ? (
        <ViewTransition>
          <Suspense fallback={<VideoPlaceholder />}>
            <LazyVideo />
          </Suspense>
        </ViewTransition>
      ) : null}
    </>
  );
}

export default function Page() {
  return (
    <>
      <main className='page'>
        <Component />
      </main>
    </>
  );
}
