import styled, { StyledComponent } from "styled-components";
import { fonts, colors, bps } from "../../shared/variables";

export const Paragraph: StyledComponent<"p", {}> = styled.p`
  margin-top: 4rem;
  font-family: ${fonts.ibm};
  line-height: 1.3;
  color: ${props => props.color || colors.white};

  @media (min-width: ${bps.sm}) {
    font-size: 1.3rem;
  }
`;
