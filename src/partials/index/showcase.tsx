import React, { FC } from "react";
import styled from "styled-components";

import { bps, colors } from "../../shared/variables";
import { pxToRem, maxContentWidth } from "../../shared/style-utils";

import { Header as _Header } from "../../components/Header/Header";
import { Paragraph } from "../../components/Paragraph/Paragraph";

//@ts-ignore
import commitHistory from "../../images/commit-history.svg";

const ShowcaseSection = styled.section`
  padding: 2rem 1rem;
  background: ${colors.purple1};
`;

const Container = styled.div`
  ${maxContentWidth()}

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

const DevActivity = styled.img`
  width: ${pxToRem(400)};
  height: ${pxToRem(100)};
  margin-top: ${pxToRem(64)};
`;

const Header = styled(_Header)`
  margin: 0;

  @media (min-width: ${bps.sm}) {
    align-self: flex-start;
  }

  @media (min-width: ${bps.lg}) {
    width: unset;
  }
`;

const Description = styled(Paragraph)``;

export const Showcase: FC = () => {
  return (
    <ShowcaseSection>
      <Container>
        <Header color={colors.white}>My small creations</Header>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel
          dolor placerat nunc euismod rhoncus. Nam feugiat ipsum vel eleifend
          luctus. Nulla ullamcorper justo facilisis diam porta aliquet.
          Curabitur nisi massa, placerat eu interdum ut, bibendum quis dui.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel
          dolor placerat nunc euismod rhoncus. Nam feugiat ipsum vel eleifend
          luctus. Nulla ullamcorper justo facilisis diam porta aliquet.
          Curabitur nisi massa, placerat eu interdum ut, bibendum quis dui.
        </Description>
        <DevActivity src={commitHistory} />
      </Container>
    </ShowcaseSection>
  );
};
