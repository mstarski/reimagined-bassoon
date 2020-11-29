import React from "react";
import styled from "styled-components";

import { Header as _Header } from "../../components/Header/Header";
import { colors, bps } from "../../shared/variables";
import { maxContentWidth, pxToRem } from "../../shared/style-utils";

// @ts-ignore
import wave from "../../images/wave.svg";
// @ts-ignore
import sentMessages from "../../images/sent_messages.svg";

import { ContactForm } from "../../components/ContactForm/ContactForm";

const Container = styled.section`
  position: relative;
  min-height: 100vh;
  padding: 1rem 0;
  overflow: hidden;
  background: ${colors.white};

  @media (min-width: ${bps.lg}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ContactWrapper = styled.div`
  ${maxContentWidth()}

  @media(min-width: ${bps.lg}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Header = styled(_Header)`
  width: auto;
  margin-top: 5rem;
  margin-bottom: 2rem;
  padding: 0 1.5rem;
  text-align: center;

  @media (min-width: ${bps.lg}) {
    margin-top: 0;
  }
`;

const Description = styled.p`
  padding: 0 1rem;
  margin-bottom: 3rem;
  text-align: center;
  color: ${colors.purple5};
`;

const SentMessages = styled.img`
  position: relative;
  z-index: 2;
  display: none;

  @media (min-width: ${bps.lg}) {
    display: block;
    width: ${pxToRem(600)};
  }
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

const Column = styled.div`
  @media (min-width: ${bps.lg}) {
    &.left {
      align-self: start;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      width: 50%;
    }

    &.right {
      width: 50%;
    }
  }
`;

export const ContactContent = () => {
  return (
    <Container>
      <ContactWrapper>
        <Column className="left">
          <Header color={colors.purple3}>Send me a message</Header>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vel dolor placerat nunc euismod rhoncus. Nam feugiat ipsum vel
            eleifend luctus. Nulla ullamcorper justo facilisis diam porta
            aliquet. Curabitur nisi massa, placerat eu interdum ut, bibendum
            quis dui.
          </Description>
          <SentMessages src={sentMessages} />
        </Column>
        <Column className="right">
          <ContactForm />
        </Column>
        <Wave src={wave}></Wave>
      </ContactWrapper>
    </Container>
  );
};
