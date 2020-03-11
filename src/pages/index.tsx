import React, { FC } from "react";
import styled from "styled-components";

import { bps, colors, fonts } from "../shared/variables";
import { pxToRem } from "../shared/style-utils";

import { Layout } from "../components/Layout/Layout";
import { Button } from "../components/Button/Button";

import personSvg from "../images/undraw_hacker_mindset_gjwq-no-tree.svg";
import branchIcon from "../images/code-branch-solid.svg";

const Section1 = styled.section`
  font-family: ${fonts.fira};
  font-weight: 700;
  background: ${colors.purple3};
`;

const S1Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
  min-height: calc(100vh - ${pxToRem(64)} - 3rem);
  padding-top: 3rem;
`;

const NameHeader = styled.h1`
  width: ${pxToRem(270)};
  margin: 0 auto;
  font-size: ${pxToRem(48)};
  line-height: 1.2;
  color: ${colors.white};
`;

const PersonSVG = styled.img`
  width: 300px;
  height: 200px;
`;

const BranchIcon = styled.img`
  width: 32px;
  height: 32px;
`;

const IndexPage: FC<{}> = () => (
  <Layout>
    <Section1>
      <S1Wrapper>
        <NameHeader>Michał >_ Starski</NameHeader>
        <PersonSVG src={personSvg} alt="Illustration of a person" />
        <Button>
          <span>See my work</span>
          <BranchIcon src={branchIcon} alt="Branch icon" />
        </Button>
      </S1Wrapper>
    </Section1>
  </Layout>
);

export default IndexPage;
