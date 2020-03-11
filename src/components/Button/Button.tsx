import React, { FC, ReactElement, ReactText } from "react";
import styled from "styled-components";

import { colors, fonts } from "../../shared/variables";
import { pxToRem } from "../../shared/style-utils";

const StyledButton = styled.button`
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
  background: ${colors.purple5};
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

type Props = {
  children: ReactElement[] | ReactElement | ReactText;
};

export const Button: FC<Props> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};
