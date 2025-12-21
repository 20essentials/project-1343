import '@/styles/hero.css';
export function Hero() {
  return (
    <article className='hero'>
      <h1 className='title-1'>
        20 Examples with View Transitions{' '}
        <img
          src='/assets/view-transtition-logo.svg'
          alt='view-transtion'
          className='am-view-transition-logo'
        />
      </h1>
    </article>
  );
}
