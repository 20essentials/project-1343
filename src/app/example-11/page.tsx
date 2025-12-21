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
      <button className='tilt-wrapper' aria-label='Get started' onClick={toggleTheme}>
        <div className='sensor tl'></div>
        <div className='sensor tr'></div>
        <div className='sensor bl'></div>
        <div className='sensor br'></div>

        <div className='visual-pill'>
          <div className='specular-highlight'></div>

          <div className='text-label'>
            <span className='char' style={{ '--i': '0' } as React.CSSProperties}>
              G
            </span>
            <span className='char' style={{ '--i': '1' } as React.CSSProperties}>
              e
            </span>
            <span className='char' style={{ '--i': '2' } as React.CSSProperties}>
              t
            </span>
            <span className='char' style={{ '--i': '3' } as React.CSSProperties}>
              &nbsp;
            </span>
            <span className='char' style={{ '--i': '4' } as React.CSSProperties}>
              s
            </span>
            <span className='char' style={{ '--i': '5' } as React.CSSProperties}>
              t
            </span>
            <span className='char' style={{ '--i': '6' } as React.CSSProperties}>
              a
            </span>
            <span className='char' style={{ '--i': '7' } as React.CSSProperties}>
              r
            </span>
            <span className='char' style={{ '--i': '8' } as React.CSSProperties}>
              t
            </span>
            <span className='char' style={{ '--i': '9' } as React.CSSProperties}>
              e
            </span>
            <span className='char' style={{ '--i': '10' } as React.CSSProperties}>
              d
            </span>
          </div>

          <div className='chip-wrapper'>
            <div className='chip'>
              <svg
                className='arrow-icon'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3'
                  stroke='white'
                  strokeWidth='3'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
              </svg>
            </div>
          </div>

          <div className='right-glow'></div>
        </div>
      </button>
    </main>
  );
}
