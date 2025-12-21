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
      <div className='mario-container' onClick={toggleTheme}>
        <div className='question-block'>
          <div className='block-front'>
            <div className='screws top-left' />
            <div className='screws top-right' />
            <div className='screws bottom-left' />
            <div className='screws bottom-right' />
            <div className='question'>?</div>
          </div>
          <div className='mushroom'>
            <div className='cap'>
              <div className='spot spot1' />
              <div className='spot spot2' />
              <div className='spot spot3' />
              <div className='spot spot4' />
            </div>
            <div className='head'>
              <div className='eyes'>
                <div className='eye left-eye' />
                <div className='eye right-eye' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
