import React, { FC } from "react";
import styled from "styled-components";

import { colors } from "../../shared/variables";

type GithubProject = {
  name: string;
  description: string;
  link: string;
  preview: string;
  position: number;
};

type Props = {
  projects: GithubProject[];
};

const Grid = styled.div`
  display: grid;
`;

const GridItem = styled.div`
  background: ${colors.purple3};
`;

export const ProjectsGrid: FC<Props> = () => {
  return (
    <Grid>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
    </Grid>
  );
};
