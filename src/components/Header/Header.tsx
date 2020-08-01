import styled from "styled-components";

import { pxToRem } from "../../shared/style-utils";
import { fonts, bps } from "../../shared/variables";

type Props = {
  align?: string;
};

export const Header = styled.h1<Props>`
  width: ${pxToRem(270)};
  margin: 0 auto;
  font-family: ${fonts.fira};
  font-size: ${pxToRem(48)};
  font-weight: 700;
  line-height: 1.2;
  text-align: ${props => props.align || "left"};
  color: ${props => props.color};

  @media (min-width: ${bps.md}) {
    font-size: 3.5rem;
  }
`;
