export type NavItems = {
  [key: string]: {
    text: string;
    href: string;
    img?: string;
  };
};

export type Variant = "primary" | "secondary";

export interface VariantProperties {
  background: string;
  text: string;
}

export interface ButtonVariantProperties extends VariantProperties {
  hover: {
    bg: string;
    text: string;
  };
}

export type PageState = {
  footerVariant: Variant;
};

export type Action = {
  type: string;
  payload: {
    [key: string]: any;
  };
};

export interface Technology {
  name: string;
  logo: string;
  description: string;
}

export enum Fonts {
  fira = "fira",
  ibm = "ibm",
}

export enum Colors {
  purple1 = "purple1",
  purple2 = "purple2",
  purple3 = "purple3",
  purple4 = "purple4",
  purple5 = "purple5",
  purple6 = "purple6",
  red = "red",
  yellow = "yellow",
  white = "white",
  black = "black",
  gray = "gray",
}

export enum Breakpoints {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}
