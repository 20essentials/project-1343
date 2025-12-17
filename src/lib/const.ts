export const DATA = [
  {
    id: '8a6c9c3e-4a3d-4c5a-9c6f-1e2b7c1a9d01',
    title: 'Room',
    minutes: 117,
    year: 2015,
    description:
      'Jack is a young boy of 5 years old who has lived all his life in one room. He believes everything within it are the only real things in the world. But what will happen when his Ma suddenly tells him that there are other things outside of Room?',
    image: '/assets/u1.avif'
  },
  {
    id: 'b2f5d8a4-1c7e-4e6a-9c3a-0d9a2f8e4b12',
    title: 'Whiplash',
    minutes: 167,
    year: 2015,
    description:
      'Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.',
    image: '/assets/u2.avif'
  },
  {
    id: 'c91e6f2d-8c34-4d7b-b5c2-6f4d3a2e7c89',
    title: 'Mad Max',
    minutes: 120,
    year: 2015,
    description: `An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order. There's Max, a man of action and a man of few words, who seeks peace of mind following the loss of his wife and child in the aftermath of the chaos.`,
    image: '/assets/u3.avif'
  },
  {
    id: 'f4a8b9e1-5d6c-4c2a-9f7e-3b1a0c8d2e45',
    title: 'The Revenant',
    minutes: 156,
    year: 2015,
    description: `In the 1820s, a frontiersman, Hugh Glass, sets out on a path of vengeance against those who left him for dead after a bear mauling.`,
    image: '/assets/u4.avif'
  }
];

export function getViewTransitionName({ suffix }: { suffix: string }) {
  return `vt-${suffix}`;
}
