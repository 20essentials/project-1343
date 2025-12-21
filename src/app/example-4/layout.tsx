import { type Metadata } from 'next';
import '@/styles/global.css';

export const metadata: Metadata = {
  title: 'View Transitions With NextJs',
  description: 'Practicing View Transitions',
  icons: {
    icon: '/assets/favicon.png'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <video
        className='am-video'
        src='/assets/v1deo-1.mp4'
        autoPlay
        muted
        loop
      ></video>
      <main className='page'>{children}</main>
    </>
  );
}
