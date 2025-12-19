'use client';
import './page.css';
import { startTransition, useState, ViewTransition } from 'react';

function Rectangle() {
  return (
    <ViewTransition>
      <aside className='rectangle rectangle-gradient'></aside>
    </ViewTransition>
  );
}
function RectangleHidden() {
  return (
    <ViewTransition>
      <aside className='rectangle rectangle-hidden'></aside>
    </ViewTransition>
  );
}

function Component() {
  const [show, setShow] = useState(false);

  function handleShow() {
    startTransition(() => {
      setShow(!show);
    });
  }

  return (
    <>
      <button className='button-show-or-not' onClick={handleShow}>
        {show ? '✖️' : '➕'}
      </button>
      {show ? <Rectangle /> : <RectangleHidden />}
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
      ></video>
      <Component />
    </article>
  );
}
