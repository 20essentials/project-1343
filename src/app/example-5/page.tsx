'use client';
import './page.css';
import { startTransition, useState, ViewTransition } from 'react';

function Component() {
  const [show, setShow] = useState(false);

  function handleShow() {
    startTransition(() => {
      setShow(prev => !prev);
    });
  }

  return (
    <>
      <button className='button-show-or-not' onClick={handleShow}>
        {show ? '✖️' : '➕'}
      </button>

      {show ? (
        <ViewTransition key='visible' enter='slide-in-left' exit='slide-out-right'>
          <aside className='rectangle rectangle-gradient' />
        </ViewTransition>
      ) : (
        <ViewTransition key='hidden' enter='slide-in-left' exit='slide-out-right'>
          <aside className='rectangle rectangle-hidden' />
        </ViewTransition>
      )}
    </>
  );
}

export default function Page() {
  return (
    <article className='page'>
      <video
        className='am-video'
        src='/assets/v1deo-example-5.mp4'
        autoPlay
        muted
        loop
      />
      <Component />
    </article>
  );
}
