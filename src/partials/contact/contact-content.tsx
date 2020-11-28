import React from "react";
import styled from "styled-components";

import { Header as _Header } from "../../components/Header/Header";
import { colors, bps } from "../../shared/variables";
import { maxContentWidth, pxToRem } from "../../shared/style-utils";

// @ts-ignore
import wave from "../../images/wave.svg";
import { ContactForm } from "../../components/ContactForm/ContactForm";

const Container = styled.section`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: ${colors.white};
`;

const ContactWrapper = styled.div`
  ${maxContentWidth()}
`;

const Header = styled(_Header)`
  width: auto;
  margin-top: 5rem;
  margin-bottom: 2rem;
  padding: 0 1.5rem;
  text-align: center;
`;

const Description = styled.p`
  padding: 0 1rem;
  margin-bottom: 3rem;
  text-align: center;
  color: ${colors.purple5};
`;

const Wave = styled.img`
  position: absolute;
  bottom: -1px;
  left: ${pxToRem(-400)};
  z-index: 1;

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
      <ContactWrapper>
        <Header color={colors.purple3}>Send me a message</Header>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel
          dolor placerat nunc euismod rhoncus. Nam feugiat ipsum vel eleifend
          luctus. Nulla ullamcorper justo facilisis diam porta aliquet.
          Curabitur nisi massa, placerat eu interdum ut, bibendum quis dui.
        </Description>
        <ContactForm />
        <Wave src={wave}></Wave>
      </ContactWrapper>
    </Container>
  );
};
