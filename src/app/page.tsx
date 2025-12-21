import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/example-10');
  return <></>;
}