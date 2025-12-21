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
      <label id='Container'>
        <input type='checkbox' id='checkbox' onClick={toggleTheme} />
        <div id='buttonOutBorder'>
          <div className='fx' />
          <div className='fx bottom' />
          <div id='button'>
            <div id='buttonText' />
            <div id='buttonHand'>
              <svg
                className='svg svgLocked'
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={29}
                viewBox='0 0 24 29'
                fill='none'
                stroke='#BBBBBB'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <rect x={3} y={11} width={18} height={15} rx={2} ry={2} />
                <path d='M7 11V7a5 5 0 0 1 10 0v4' />
              </svg>
              <svg
                className='svg svgUnlocked'
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={29}
                viewBox='0 0 24 29'
                fill='none'
                stroke='#3fc079'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <rect x={3} y={11} width={18} height={15} rx={2} ry={2} />
                <path d='M7 11V7a5 5 0 0 1 9.9-1' />
              </svg>
            </div>
          </div>
        </div>
      </label>
    </main>
  );
}
