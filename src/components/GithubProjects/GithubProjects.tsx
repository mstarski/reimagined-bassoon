import React from "react";
import styled from "styled-components";
import { languageColors } from "../../configs/language-colors";
import { useRepos } from "../../hooks/useRepos";

// @ts-ignore
import fileIcon from "../../images/file-code-regular.svg";
import { pxToRem } from "../../shared/style-utils";
import { colors, fonts } from "../../shared/variables";

const Box = styled.div`
  display: grid;
  grid-gap: 1rem 0;
  color: ${colors.white};
  padding: 2rem;
  border-radius: 1rem;
  background: ${colors.purple3};
`;

const FileIcon = styled.img`
  width: 1rem;
  margin-right: 1rem;
`;

const RepoName = styled.a`
  color: ${colors.white};
  font-weight: 700;
  font-family: ${fonts.fira};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Description = styled.p``;

const Language = styled.div`
  display: flex;
  align-items: center;
`;

const Circle = styled.div<{ language: string }>`
  width: 1rem;
  height: 1rem;
  margin-right: 1rem;
  border-radius: 100%;
  ${props => `background: ${languageColors[props.language]}`}
`;

const LanguageName = styled.div``;

const ids = [
  161648694,
  304745444,
  198503990,
  242848663,
  153194501,
  173647899,
  206633591,
];

export const GithubProjects = () => {
  const [repos, loading, error] = useRepos(ids);

  return (
    <Box>
      <Row>
        <FileIcon src={fileIcon}></FileIcon>
        <RepoName href="#">nodetasks</RepoName>
      </Row>
      <Row>
        <Description>Simple CLI for npm/yarn tasks execution</Description>
      </Row>
      <Row>
        <Language>
          <Circle language="Python"></Circle>
          <LanguageName>Python</LanguageName>
        </Language>
      </Row>
    </Box>
  );
};
