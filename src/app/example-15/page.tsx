'use client';
import './page.css';
import './rootVariables.css';
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
      <button className='pixel-button' onClick={toggleTheme}>
        PLAY
      </button>
    </main>
  );
}
