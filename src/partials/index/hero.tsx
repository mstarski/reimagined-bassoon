import React, { FC, useRef, SyntheticEvent, ReactSVG } from "react";
import styled from "styled-components";
import SVG from "react-inlinesvg";
import { scroller } from "react-scroll";

import { bps, colors, fonts } from "../../shared/variables";
import { pxToRem } from "../../shared/style-utils";

import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";

import personSvg from "../../images/undraw_hacker_mindset_gjwq-no-tree.svg";
import branchIcon from "../../images/code-branch-solid.svg";

const HeroSection = styled.section`
  font-family: ${fonts.fira};
  font-weight: 700;
  background: ${colors.purple3};
`;

const HeroWrapper = styled.div`
  position: relative;
  z-index: 1;
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

  @media (min-width: ${bps.sm}) {
    height: 300px;
  }

  @media (min-width: ${bps.md}) {
    order: 2;
    width: 462px;
    height: 350px;
  }
`;

const BranchIcon = styled(SVG)`
  width: 32px;
  height: 32px;
`;

const HeroHeader = styled(Header)`
  @media (min-width: ${bps.md}) {
    width: 28rem;
    font-size: 5rem;
  }
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
      offset: -75,
    });
  }

  return (
    <HeroSection>
      <HeroWrapper>
        <HeroHeader color={colors.white}>Michał >_ Starski</HeroHeader>
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
