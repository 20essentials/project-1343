import '@/styles/container-cards.css';
import { Button } from './button';
export function ContainerCards() {
  return (
    <article className='container-cards'>
      {Array.from({ length: 20 }, (_, i) => {
        const name = `Example ${i + 1}`;
        const hue = i * 20;
        const link = `/example-${i + 1}`;
        return <Button key={i} link={link} name={name} hue={`${hue}`} />;
      })}
    </article>
  );
}
