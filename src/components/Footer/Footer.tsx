import React, { FC, useContext } from "react";
import styled from "styled-components";

import { fonts, bps, colors } from "../../shared/variables";
import { pxToRem } from "../../shared/style-utils";
import { Variant, VariantProperties } from "../../shared/typedefs";

import flowerDev from "../../images/flower-dev.svg";
import { Store } from "../../store/PageStore";

type Props = {
  variant?: Variant;
};

const variants: { [name: string]: VariantProperties } = {
  primary: {
    background: colors.white,
    text: colors.purple1,
  },

  secondary: {
    background: colors.purple1,
    text: colors.white,
  },
};

const FooterWrapper = styled.footer<{ variant: Variant }>`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100vw - 2rem);
  height: ${pxToRem(80)};
  margin-bottom: 4rem;
  padding: 1rem 1rem 0;

  background: ${props =>
    variants[props.variant]
      ? variants[props.variant].background
      : colors.white};

  color: ${props =>
    variants[props.variant] ? variants[props.variant].text : colors.purple1};

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
  width: 28rem;
  height: ${pxToRem(50)};

  @media (min-width: ${bps.sm}) and (max-width: ${bps.md}) {
    text-align: right;
  }

  @media (min-width: ${bps.sm}) {
    width: 22.5rem;
  }
`;

export const Footer: FC<Props> = ({ variant }) => {
  const [store] = useContext(Store);

  return (
    <FooterWrapper variant={store.footerVariant}>
      <FooterLeft>
        <p>© 2020 Michał Starski</p>
        <FlowerDev src={flowerDev} alt="Developer sitting next to a flower" />
      </FooterLeft>
      <FooterRight>
        <p>
          Font awesome icons are being used under{" "}
          <a href="https://fontawesome.com/license">
            Creative Commons Attribution 4.0 licence
          </a>
        </p>
        <p>Illustrations: undraw.co</p>
      </FooterRight>
    </FooterWrapper>
  );
};
