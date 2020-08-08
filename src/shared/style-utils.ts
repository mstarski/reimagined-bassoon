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

export function px(value: string): string {
  return `
    padding-left: ${value};
    padding-right: ${value}; 
  `;
}

export function py(value: string): string {
  return `
    padding-top: ${value};
    padding-bottom: ${value}; 
  `;
}

export function triangle(width: number, height: number, color: string): string {
  return `
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 ${pxToRem(width / 2)} ${pxToRem(height)} ${pxToRem(
    width / 2
  )};
    border-color: transparent transparent ${color} transparent;
  `;
}

export const stretchHeight = `min-height: calc(100vh - ${pxToRem(64)} - 3rem)`;
