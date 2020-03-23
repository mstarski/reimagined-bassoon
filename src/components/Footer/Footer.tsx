import React from "react";
import styled from "styled-components";

import { fonts, bps } from "../../shared/variables";
import { pxToRem } from "../../shared/style-utils";

import flowerDev from "../../images/flower-dev.svg";

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100vw - 2rem);
  height: ${pxToRem(80)};
  margin-bottom: ${pxToRem(80)};
  padding: 1rem 1rem 0;

  @media (min-width: ${bps.sm}) {
    margin-bottom: 0;
  }
`;

const FlowerDev = styled.img`
  display: none;

  @media (min-width: ${bps.sm}) {
    display: unset;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: ${fonts.fira};
  font-size: ${pxToRem(12)};
`;

const FooterLeft = styled(FooterContainer)`
  align-items: center;
`;

const FooterRight = styled(FooterContainer)`
  flex-flow: column;
  width: ${pxToRem(360)};
  height: ${pxToRem(50)};

  @media (min-width: ${bps.sm}) and (max-width: ${bps.md}) {
    text-align: right;
  }
`;

export const Footer = () => (
  <FooterWrapper>
    <FooterLeft>
      <p>© 2020 Michał Starski</p>
      <FlowerDev src={flowerDev} alt="Developer sitting next to a flower" />
    </FooterLeft>
    <FooterRight>
      <p>
        Font awesome icons are being used under Creative Commons Attribution 4.0
        licence
      </p>
      <p>Illustrations: undraw.co</p>
    </FooterRight>
  </FooterWrapper>
);
