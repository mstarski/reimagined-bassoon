export function pxToRem(px: number): string {
  const root = 16;
  return `${px / root}rem`;
}
