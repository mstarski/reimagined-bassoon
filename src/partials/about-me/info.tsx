import React, { FC, useContext, useEffect } from "react";
import styled from "styled-components";

import { colors, bps } from "../../shared/variables";
import {
  pxToRem,
  mx,
  my,
  stretchHeight,
  triangle,
  px,
} from "../../shared/style-utils";

import { Header as _Header } from "../../components/Header/Header";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import { Button } from "../../components/Button/Button";

import DevActivityImg from "../../images/undraw_developer_activity_bv83.svg";
import { Store, ACTIONS } from "../../store/PageStore";

const InfoSection = styled.section`
  ${stretchHeight};

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

  height: ${pxToRem(200)};

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
    margin-top: -7rem;
  }
`;

const Triangle = styled.div`
  ${triangle(950, 700, colors.purple1)}

  position: absolute;
  bottom: 0;
  right: -18rem;
  display: none;

  @media (min-width: ${bps.md}) {
    display: block;
  }

  @media (min-width: ${bps.xl}) {
    ${triangle(1500, 1500, colors.purple1)}
  }
`;

export const Info: FC = () => {
  const [, dispatch] = useContext(Store);

  useEffect(() => {
    dispatch({
      type: ACTIONS.SET_FOOTER_VARIANT,
      payload: { variant: "secondary" },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InfoSection>
      <Header color={colors.purple2} align="center">
        About me
      </Header>
      <InfoParagraph color={colors.purple2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel
        dolor placerat nunc euismod rhoncus. Nam feugiat ipsum vel eleifend
        luctus. Nulla ullamcorper justo facilisis diam porta aliquet. Curabitur
        nisi massa, placerat eu interdum ut, bibendum quis dui. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Maecenas vel dolor placerat
        nunc euismod rhoncus. Nam feugiat ipsum vel eleifend luctus. Nulla
        ullamcorper justo facilisis diam porta aliquet. Curabitur nisi massa,
        placerat eu interdum ut, bibendum quis dui.
      </InfoParagraph>
      <CTAButton variant="secondary">Hiho</CTAButton>
      <DevActivity src={DevActivityImg} />
      <Triangle />
    </InfoSection>
  );
};
