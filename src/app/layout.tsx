import { type Metadata } from 'next';
import '@/styles/global.css';
import { inter } from '@/lib/fonts';
import { ButtonInnert } from './buttonInnert';

export const metadata: Metadata = {
  title: '20 Examples with View Transitions',
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
        {children} 
        <ButtonInnert />
      </body>
    </html>
  );
}
