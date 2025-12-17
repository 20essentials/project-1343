const HEX_CHARS = '0123456789ABCDEF';
const HEX_COLOR_LENGTH = 6;
const getRandomInt = (max: number) => ~~(Math.random() * max);
const getRandomHex = () =>
  `#${Array.from(
    { length: HEX_COLOR_LENGTH },
    () => HEX_CHARS[getRandomInt(16)]
  ).join('')}`;

export async function getRandomGradient(i: number): Promise<string> {
  // 'use cache';
  return `linear-gradient(${getRandomInt(
    360 - i
  )}deg, ${getRandomHex()}, ${getRandomHex()}, ${getRandomHex()})`;
}
