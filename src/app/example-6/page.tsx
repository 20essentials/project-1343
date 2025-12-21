'use client';
import './page.css';
import {
  addTransitionType,
  startTransition,
  useState,
  ViewTransition
} from 'react';

function Component() {
  const [show, setShow] = useState(false);

  function handlePrev() {
    startTransition(() => {
      addTransitionType(show ? 'slide-out-left' : 'slide-in-right');
      setShow(prev => !prev);
    });
  }

  function handleNext() {
    startTransition(() => {
      addTransitionType(show ? 'slide-out-right' : 'slide-in-left');
      setShow(prev => !prev);
    });
  }

  return (
    <>
      <section className='container-buttons'>
        {[
          {
            fn: handlePrev,
            label: '⬅️'
          },
          {
            fn: handleNext,
            label: '➡️'
          }
        ].map(({ fn, label }, i) => (
          <button key={i} className='button-show-or-not' onClick={fn}>
            {label}
          </button>
        ))}
      </section>

      {show ? (
        <ViewTransition
          key='visible'
          enter={{
            'slide-in-left': 'slide-in-left',
            'slide-in-right': 'slide-in-right',
            default: 'auto'
          }}
          exit={{
            'slide-out-left': 'slide-out-left',
            'slide-out-right': 'slide-out-right',
            default: 'auto'
          }}
        >
          <aside className='rectangle rectangle-gradient' />
        </ViewTransition>
      ) : (
        <ViewTransition
          key='hidden'
          enter={{
            'slide-in-left': 'slide-in-left',
            'slide-in-right': 'slide-in-right',
            default: 'auto'
          }}
          exit={{
            'slide-out-left': 'slide-out-left',
            'slide-out-right': 'slide-out-right',
            default: 'auto'
          }}
        >
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
        src='/assets/v1deo-example-6.mp4'
        autoPlay
        muted
        loop
      />
      <Component />
    </article>
  );
}
