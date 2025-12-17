'use client';
import './page.css';
import { startTransition, useState, ViewTransition } from 'react';

const VIEW_TRANSITION_NAME = 'view-transition-name';
type fnHandleClick = () => void;

export function Thumbnail({ handleClick }: { handleClick: fnHandleClick }) {
  return (
    <ViewTransition name={VIEW_TRANSITION_NAME}>
      <aside onClick={handleClick} className='thumbnail gradient-bg'>
        Click me!
      </aside>
    </ViewTransition>
  );
}

export function FullScreenThumbNail({
  handleClick
}: {
  handleClick: fnHandleClick;
}) {
  return (
    <ViewTransition name={VIEW_TRANSITION_NAME}>
      <aside onClick={handleClick} className='thumbnail-grande gradient-bg'>
      </aside>
    </ViewTransition>
  );
}

export function Component() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const openFullScreen = () => {
    startTransition(() => {
      setIsFullScreen(true);
    });
  };
  
  const closeFullScreen = () => {
    startTransition(() => {
      setIsFullScreen(false);
    });
  };

  if (isFullScreen) {
    return <FullScreenThumbNail handleClick={closeFullScreen} />;
  }

  return <Thumbnail handleClick={openFullScreen} />;
}

export default function Page() {
  return (
    <main className='page'>
      <Component />
    </main>
  );
}
