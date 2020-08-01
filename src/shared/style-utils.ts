export function pxToRem(px: number): string {
  const root = 16;
  return `${px / root}rem`;
}

export function my(value: string): string {
  return `
    margin-top: ${value};
    margin-bottom: ${value}; 
  `;
}

export function mx(value: string): string {
  return `
    margin-left: ${value};
    margin-right: ${value}; 
  `;
}

export const stretchHeight = `min-height: calc(100vh - ${pxToRem(64)} - 3rem)`;
