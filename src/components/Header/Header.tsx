import React, { createElement } from "react";
import styled from "styled-components";

import { pxToRem } from "../../shared/style-utils";
import { fonts } from "../../shared/variables";

export const Header = styled.h1`
  width: ${pxToRem(270)};
  margin: 0 auto;
  font-family: ${fonts.fira};
  font-size: ${pxToRem(48)};
  font-weight: 700;
  line-height: 1.2;
  color: ${props => props.color};
`;
