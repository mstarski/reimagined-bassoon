import React, { FC } from "react";
import styled from "styled-components";

import { colors, bps } from "../../shared/variables";
import { pxToRem, mx, my, px, maxContentWidth } from "../../shared/style-utils";

import { Header as _Header } from "../../components/Header/Header";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import { Button } from "../../components/Button/Button";
import { MOCK_DESCRIPTION } from "../../mocks/constants";

// @ts-ignore
import DevActivityImg from "../../images/undraw_developer_activity_bv83.svg";

const InfoSection = styled.section`
  ${maxContentWidth()}

  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-top: 5rem;
  background: ${colors.white};

  @media (min-width: ${bps.xl}) {
    ${px("4rem")};

    display: grid;
    grid-template: repeat(4, 25%) / repeat(4, 1fr);
  }
`;

const Header = styled(_Header)`
  position: relative;
  z-index: 2;

  @media (min-width: ${bps.xl}) {
    grid-area: 1 / 1 / 1 / 5;
    width: 100%;
    font-size: 5rem;
    text-align: left;
  }
`;

const InfoParagraph = styled(Paragraph)`
  ${mx("auto")};

  position: relative;
  z-index: 2;

  margin-bottom: 5rem;
  min-height: ${pxToRem(200)};
  width: ${pxToRem(300)};

  @media (min-width: ${bps.sm}) {
    width: 90%;
  }

  @media (min-width: ${bps.md}) {
    margin-bottom: 5rem;
  }

  @media (min-width: ${bps.xl}) {
    grid-area: 2 / 1 / 3 / 3;
    margin-left: 0;
    margin-right: 0;
    font-size: 1.5rem;
  }
`;

const DevActivity = styled.img`
  position: relative;
  z-index: 2;

  ${my("6rem")};

  height: 10rem;

  @media (min-width: ${bps.sm}) {
    height: ${pxToRem(200)};
  }

  @media (min-width: ${bps.md}) {
    height: 18rem;
  }

  @media (min-width: ${bps.xl}) {
    grid-area: 2 / 3 / 3 / 5;
    justify-self: center;
  }
`;

const CTAButton = styled(Button)`
  position: relative;
  z-index: 2;

  @media (min-width: ${bps.xl}) {
    grid-area: 3;
  }
`;

export const Info: FC = () => {
  return (
    <InfoSection>
      <Header color={colors.purple2} align="center">
        About me
      </Header>
      <InfoParagraph color={colors.purple2}>{MOCK_DESCRIPTION}</InfoParagraph>
      <CTAButton variant="secondary">Hiho</CTAButton>
      <DevActivity src={DevActivityImg} />
    </InfoSection>
  );
};
