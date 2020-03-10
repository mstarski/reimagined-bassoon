export interface NavItems {
  [key: string]: {
    text: string;
    href: string;
    img?: string;
  };
}

export type StringMap = {
  [key: string]: string;
};
