import { type Metadata } from 'next';
import '@/styles/global.css';
import { inter } from '@/lib/fonts';

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
    <html lang='en' className={inter.className}>
      <body>
        <video
          className='am-video'
          src='/assets/v1deo-1.mp4'
          autoPlay
          muted
          loop
        ></video>
        <main className='page'>{children}</main>
      </body>
    </html>
  );
}
