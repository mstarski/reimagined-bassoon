import React, { FC } from "react";
import styled from "styled-components";

import { colors } from "../../shared/variables";

import { Header } from "../../components/Header/Header";

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
      <Header color={colors.white}>My small creations</Header>
    </ShowcaseWrapper>
  );
};
