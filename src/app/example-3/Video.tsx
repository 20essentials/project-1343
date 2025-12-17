import { typeObjectData } from './data';

function Thumbnail() {
  return <div aria-hidden='true' tabIndex={-1} className={`thumbnail loading`} />;
}

export function Video({ data }: { data: typeObjectData }) {
  //I don't use this data (but simulate slow, to use the suspense)
  console.log(data);

  return (
    <div className='video'>
      <div className='link'>
        <Thumbnail></Thumbnail>
        <div className='info'>
          <div className='video-title'>First Video</div>
          <div className='video-description'>Video Description</div>
        </div>
      </div>
    </div>
  );
}

export function VideoPlaceholder() {
  return (
    <div className='video'>
      <div className='link'>
        <Thumbnail></Thumbnail>
        <div className='info'>
          <div className='video-title loading' />
          <div className='video-description loading' />
        </div>
      </div>
    </div>
  );
}
