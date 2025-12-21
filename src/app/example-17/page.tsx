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
      <>
        <input
          className='liquid-button'
          id='toggle-animation'
          type='checkbox'
          onClick={toggleTheme}
        />
        <div className='button-li'>
          <label
            className='water-drop donut-transform'
            htmlFor='toggle-animation'
          >
            <span className='bubble bubble1' />
            <span className='bubble bubble2' />
            <span className='bubble bubble3' />
            <span className='bubble bubble4' />
            <span className='bubble bubble5' />
            <span className='bubble bubble6' />
            <div className='ripple'>
              <div className='wave wave1' />
              <div className='wave wave2' />
              <div className='wave wave3' />
            </div>
            <div className='circle' />
          </label>
        </div>
      </>
    </main>
  );
}
