import React, { FC } from "react";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";

import { fonts } from "../../shared/variables";
import { pxToRem } from "../../shared/style-utils";

import githubLogo from "../../images/github-square-brands.svg";
import linkedinLogo from "../../images/linkedin-brands.svg";

const SocialsWrapper = styled.div`
  position: absolute;
  top: ${pxToRem(15)};
  right: 2rem;
  font-family: ${fonts.fira};
`;

const Social = styled.img`
  width: 2rem;
  height: 2rem;
  margin-left: 1rem;
  cursor: pointer;
`;

export const Socials: FC = () => {
  const tooltips: string[] = ["github", "linkedin"];

  return (
    <SocialsWrapper>
      {tooltips.map(tooltip => (
        <ReactTooltip
          key={tooltip}
          effect="solid"
          id={tooltip}
          place="bottom"
        />
      ))}

      <Social
        data-tip="Check me out on github"
        data-for="github"
        src={githubLogo}
        alt="github logo"
      />
      <Social
        data-tip="Check me out on linkedin"
        data-for="linkedin"
        src={linkedinLogo}
        alt="linkedin logo"
      />
    </SocialsWrapper>
  );
};
