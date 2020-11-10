import React from "react";
import styled from "styled-components";

import { Header as _Header } from "../../components/Header/Header";
import { colors, bps } from "../../shared/variables";
import { pxToRem } from "../../shared/style-utils";

// @ts-ignore
import wave from "../../images/wave.svg";

const Container = styled.section`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: ${colors.white};
`;

const Header = styled(_Header)`
  width: auto;
  margin-top: 5rem;
  padding: 0 1.5rem;
  text-align: center;
`;

const Wave = styled.img`
  position: absolute;
  bottom: -1px;
  left: ${pxToRem(-400)};

  @media (min-width: ${bps.md}) {
    left: 0;
  }

  @media (min-width: ${bps.lg}) {
    width: 100vw;
  }
`;

export const ContactContent = () => {
  return (
    <Container>
      <Header color={colors.purple3}>Send me a message</Header>
      <Wave src={wave}></Wave>
    </Container>
  );
};
