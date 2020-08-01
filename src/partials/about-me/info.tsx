import React, { FC, useContext, useEffect } from "react";
import styled from "styled-components";

import { colors, bps } from "../../shared/variables";
import { pxToRem, mx, my, stretchHeight } from "../../shared/style-utils";

import { Header } from "../../components/Header/Header";
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
`;

const DevActivity = styled.img`
  position: relative;
  z-index: 2;

  ${my("6rem")};

  height: ${pxToRem(200)};

  @media (min-width: ${bps.md}) {
    height: 18rem;
  }
`;

const CTAButton = styled(Button)`
  position: relative;
  z-index: 2;
`;

const Triangle = styled.div`
  position: absolute;
  bottom: 0;
  right: -20rem;
  display: none;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 ${pxToRem(475)} ${pxToRem(700)} ${pxToRem(475)};
  border-color: transparent transparent ${colors.purple1} transparent;

  @media (min-width: ${bps.md}) {
    display: block;
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
