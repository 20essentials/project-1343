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
      <div className='d3warpper' onClick={toggleTheme}>
        <div className='cover'>
          <button className='button'>S</button>
        </div>
      </div>
    </main>
  );
}
