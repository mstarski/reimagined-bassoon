import React, { FC, useRef, SyntheticEvent, ReactSVG } from "react";
import styled from "styled-components";
import SVG from "react-inlinesvg";
import { scroller } from "react-scroll";

import { bps, colors, fonts } from "../../shared/variables";
import { pxToRem } from "../../shared/style-utils";

import { Button } from "../../components/Button/Button";

import personSvg from "../../images/undraw_hacker_mindset_gjwq-no-tree.svg";
import branchIcon from "../../images/code-branch-solid.svg";
import { Header } from "../../components/Header/Header";

const HeroSection = styled.section`
  font-family: ${fonts.fira};
  font-weight: 700;
  background: ${colors.purple3};
`;

const HeroWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
  min-height: calc(100vh - ${pxToRem(64)} - 3rem);
  padding-top: 3rem;
`;

const PersonSVG = styled.img`
  width: 300px;
  height: 200px;
`;

const BranchIcon = styled(SVG)`
  width: 32px;
  height: 32px;
`;

export const Hero: FC<{}> = () => {
  const branchSVGRef = useRef<SVGElement>(null);

  // Handles branch icon's dynamic fill change on hover
  function handleButtonHover(event: SyntheticEvent) {
    if (event.type === "mouseenter") {
      (branchSVGRef.current!.lastChild as Element).setAttribute(
        "fill",
        colors.purple5
      );
    } else if (event.type === "mouseleave") {
      (branchSVGRef.current!.lastChild as Element).setAttribute(
        "fill",
        colors.white
      );
    }
  }

  function scrollDown() {
    scroller.scrollTo("showcase-header", {
      duration: 900,
      smooth: true,
      offset: -80,
    });
  }

  return (
    <HeroSection>
      <HeroWrapper>
        <Header color={colors.white}>Michał >_ Starski</Header>
        <PersonSVG src={personSvg} alt="Illustration of a person" />
        <Button
          onMouseEnter={(event: SyntheticEvent) => handleButtonHover(event)}
          onMouseLeave={(event: SyntheticEvent) => handleButtonHover(event)}
          onClick={scrollDown}
        >
          <span>See my work</span>
          <BranchIcon innerRef={branchSVGRef} src={branchIcon} />
        </Button>
      </HeroWrapper>
    </HeroSection>
  );
};
