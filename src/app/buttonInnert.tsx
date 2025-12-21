'use client';
import { Button } from '@/components/button';
import { useSelectedLayoutSegment } from 'next/navigation';
export function ButtonInnert() {
  const segment = useSelectedLayoutSegment();
  if (!segment || !segment.includes('example-')) return null;
  console.log({ segment });
  return (
    <aside className='container-button-ej'>
      <Button link='#' name={segment.replace('-', ' ')} />;
    </aside>
  );
}
