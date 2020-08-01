import React, { FC, ReactElement, ReactText } from "react";
import styled from "styled-components";

import { colors, fonts, bps } from "../../shared/variables";
import { pxToRem } from "../../shared/style-utils";
import { Variant, ButtonVariantProperties } from "../../shared/typedefs";

type Props = {
  variant: Variant;
  children?: ReactElement[] | ReactElement | ReactText;
  onMouseEnter?: (event: any) => void;
  onMouseLeave?: (event: any) => void;
  onClick?: (event: any) => void;
};

const variants: { [name: string]: ButtonVariantProperties } = {
  primary: {
    background: colors.purple5,
    text: colors.white,
    hover: {
      bg: colors.white,
      text: colors.purple5,
    },
  },

  secondary: {
    background: colors.yellow,
    text: colors.white,
    hover: {
      bg: colors.red,
      text: colors.white,
    },
  },
};

const StyledButton = styled.button<{ variant: Variant }>`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-width: ${pxToRem(213)};
  height: ${pxToRem(43)};
  border: 0;
  font-family: ${fonts.fira};
  font-size: 1rem;
  font-weight: 700;
  color: ${colors.white};
  border-radius: ${pxToRem(13)};
  background: ${props =>
    variants[props.variant]
      ? variants[props.variant].background
      : colors.purple5};
  cursor: pointer;
  transition: transform 0.3s ease-in-out, background 0.3s ease-in-out;

  &:hover {
    color: ${props =>
      variants[props.variant]
        ? variants[props.variant].hover.text
        : colors.purple5};
    background: ${props =>
      variants[props.variant]
        ? variants[props.variant].hover.bg
        : colors.white};
    transform: scale(1.1);
  }

  @media (min-width: ${bps.sm}) {
    width: 16rem;
    height: 3rem;
    font-size: 1.4rem;
  }

  @media (min-width: ${bps.md}) {
    width: ${pxToRem(350)};
    height: ${pxToRem(70)};
    font-size: ${pxToRem(36)};
  }
`;

export const Button: FC<Props> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
