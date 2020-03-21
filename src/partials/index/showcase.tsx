import React, { FC } from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

import { colors } from "../../shared/variables";

import { Header } from "../../components/Header/Header";
import { ProjectsGrid } from "../../components/ProjectsGrid/ProjectsGrid";

const ShowcaseWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  min-height: 100vh;
  padding-top: 5rem;
  background: ${colors.purple1};
`;

export const Showcase: FC<{}> = () => {
  return (
    <ShowcaseWrapper>
      <Element name="showcase-header">
        <Header color={colors.white}>My small creations</Header>
        <ProjectsGrid projects={[]}></ProjectsGrid>
      </Element>
    </ShowcaseWrapper>
  );
};
