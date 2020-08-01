export type NavItems = {
  [key: string]: {
    text: string;
    href: string;
    img?: string;
  };
};

export type StringMap = {
  [key: string]: string;
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
