'use client';
import './page.css';
import './view-transition.css';

function toggleTheme() {
  if (!document.startViewTransition) {
    document.documentElement.classList.toggle('dark');
    return;
  }

  document.startViewTransition(() => {
    document.documentElement.classList.toggle('dark');
  });
}

export default function Page() {
  return (
    <main className='page'>
      <div className='btn-wrapper' onClick={toggleTheme}>
        <button className='btn'>
          <div className='btn-icon'>
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
            <div className='pixel' />
          </div>
          <div className='btn-text'>
            <span className='btn-letter'>S</span>
            <span className='btn-letter'>e</span>
            <span className='btn-letter'>e</span>
            <span className='btn-letter'>&nbsp;</span>
            <span className='btn-letter'>P</span>
            <span className='btn-letter'>l</span>
            <span className='btn-letter'>a</span>
            <span className='btn-letter'>n</span>
            <span className='btn-letter'>s</span>
          </div>
        </button>
        <svg
          id='corner-1'
          width={29}
          height={29}
          viewBox='0 0 29 29'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_117_21310)'>
            <path
              className='line'
              fillRule='evenodd'
              clipRule='evenodd'
              d='M11.4381 1L0 1V0L11.4381 1.78814e-07C12.6316 -2.98023e-07 13.7762 0.474106 14.6201 1.31802L27.1577 13.8555C28.0016 14.6995 28.4757 15.8441 28.4757 17.0375V28.4757H27.4757V17.0375C27.4757 16.1093 27.1069 15.219 26.4505 14.5627L13.913 2.02513C13.2566 1.36875 12.3664 1 11.4381 1Z'
            />
          </g>
          <defs>
            <clipPath id='clip0_117_21310'>
              <rect width={29} height={29} fill='white' />
            </clipPath>
          </defs>
        </svg>
        <svg
          id='corner-2'
          width={29}
          height={29}
          viewBox='0 0 29 29'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_117_21310)'>
            <path
              className='line'
              fillRule='evenodd'
              clipRule='evenodd'
              d='M11.4381 1L0 1V0L11.4381 1.78814e-07C12.6316 -2.98023e-07 13.7762 0.474106 14.6201 1.31802L27.1577 13.8555C28.0016 14.6995 28.4757 15.8441 28.4757 17.0375V28.4757H27.4757V17.0375C27.4757 16.1093 27.1069 15.219 26.4505 14.5627L13.913 2.02513C13.2566 1.36875 12.3664 1 11.4381 1Z'
            />
          </g>
          <defs>
            <clipPath id='clip0_117_21310'>
              <rect width={29} height={29} fill='white' />
            </clipPath>
          </defs>
        </svg>
        <svg
          id='corner-3'
          width={29}
          height={29}
          viewBox='0 0 29 29'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_117_21310)'>
            <path
              className='line'
              fillRule='evenodd'
              clipRule='evenodd'
              d='M11.4381 1L0 1V0L11.4381 1.78814e-07C12.6316 -2.98023e-07 13.7762 0.474106 14.6201 1.31802L27.1577 13.8555C28.0016 14.6995 28.4757 15.8441 28.4757 17.0375V28.4757H27.4757V17.0375C27.4757 16.1093 27.1069 15.219 26.4505 14.5627L13.913 2.02513C13.2566 1.36875 12.3664 1 11.4381 1Z'
            />
          </g>
          <defs>
            <clipPath id='clip0_117_21310'>
              <rect width={29} height={29} fill='white' />
            </clipPath>
          </defs>
        </svg>
        <svg
          id='corner-4'
          width={29}
          height={29}
          viewBox='0 0 29 29'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_117_21310)'>
            <path
              className='line'
              fillRule='evenodd'
              clipRule='evenodd'
              d='M11.4381 1L0 1V0L11.4381 1.78814e-07C12.6316 -2.98023e-07 13.7762 0.474106 14.6201 1.31802L27.1577 13.8555C28.0016 14.6995 28.4757 15.8441 28.4757 17.0375V28.4757H27.4757V17.0375C27.4757 16.1093 27.1069 15.219 26.4505 14.5627L13.913 2.02513C13.2566 1.36875 12.3664 1 11.4381 1Z'
            />
          </g>
          <defs>
            <clipPath id='clip0_117_21310'>
              <rect width={29} height={29} fill='white' />
            </clipPath>
          </defs>
        </svg>
        <div className='card'>
          <div className='card-header'>
            <span>Plans?</span>
          </div>
          <div className='card-body'>
            <p>
              There are no plans! <br />
              It`s free and open-source!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
