'use client';
import { Button } from '@/components/button';
import { useSelectedLayoutSegment } from 'next/navigation';
export function ButtonInnert() {
  const segment = useSelectedLayoutSegment();
  if (!segment || !segment.includes('example-'))
    return null;
  const [_, valueString] = segment.split('-');
  const index = Number(valueString);
  return (
    /*     <>
      <Button
        link={`/${segment}`}
        name={segment.replace('-', ' ')}
        hue={`${index * 20}`}
        style={{
          position: 'fixed',
          bottom: '3vmax',
          right: '1vmax'
        }}
      />
      ;
    </> */
    <aside className='container-button-ej'>
      <Button
        link={`/${segment}`}
        name={segment.replace('-', ' ')}
        hue={`${index * 20}`}
      />
      ;
    </aside>
  );
}
