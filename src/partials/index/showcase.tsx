import React, { FC } from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

import { colors, fonts, bps } from "../../shared/variables";
import { pxToRem } from "../../shared/style-utils";

import { Header } from "../../components/Header/Header";
import { ProjectsGrid } from "../../components/ProjectsGrid/ProjectsGrid";

import commitHistory from "../../images/commit-history.svg";

const ShowcaseWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 5rem 0 6rem 0;
  background: ${colors.purple1};

  @media (min-width: ${bps.sm}) {
    padding-bottom: 3rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  max-width: 95%;
  margin: auto;

  @media (min-width: ${bps.md}) {
    max-width: ${pxToRem(730)};
  }
`;

const DevActivity = styled.img`
  width: ${pxToRem(400)};
  height: ${pxToRem(100)};
  margin-top: ${pxToRem(64)};
`;

const Description = styled.p`
  margin-top: 4rem;
  font-family: ${fonts.ibm};
  line-height: 1.3;
  color: ${colors.white};

  @media (min-width: ${bps.sm}) {
    font-size: 1.3rem;
  }
`;

const HeaderWrapper = styled(Element)`
  @media (min-width: ${bps.md}) {
    align-self: end;
    margin-right: 2rem;
    font-size: 3.5rem;
  }
`;

export const Showcase: FC<{}> = () => {
  return (
    <ShowcaseWrapper>
      <Container>
        <HeaderWrapper name="showcase-header">
          <Header color={colors.white}>My small creations</Header>
        </HeaderWrapper>
        <ProjectsGrid projects={[]}></ProjectsGrid>
        <DevActivity src={commitHistory} />
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel
          dolor placerat nunc euismod rhoncus. Nam feugiat ipsum vel eleifend
          luctus. Nulla ullamcorper justo facilisis diam porta aliquet.
          Curabitur nisi massa, placerat eu interdum ut, bibendum quis dui.
        </Description>
      </Container>
    </ShowcaseWrapper>
  );
};
