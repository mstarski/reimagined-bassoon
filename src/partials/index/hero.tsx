import React, { FC, useRef, SyntheticEvent } from "react";
import styled from "styled-components";
import SVG from "react-inlinesvg";
import { scroller } from "react-scroll";

import { bps, colors, fonts } from "../../shared/variables";
import { pxToRem, stretchHeight } from "../../shared/style-utils";

import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import { CodePersonSVG } from "../../components/CodePersonSVG/CodePersonSVG";

//@ts-ignore
import branchIcon from "../../images/code-branch-solid.svg";

//@ts-ignore
import wave from "../../images/wave.svg";

const HeroSection = styled.section`
  font-family: ${fonts.fira};
  font-weight: 700;
  background: ${colors.purple3};

  @media (min-width: ${bps.xl}) {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 3rem);
  }
`;

const HeroWrapper = styled.div`
  ${stretchHeight};

  position: relative;
  z-index: 1;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 3rem;

  @media (min-width: ${bps.xl}) {
    display: grid;
    grid-template: repeat(6, 1fr) / repeat(6, 1fr);
    width: 100%;
    max-width: ${pxToRem(1440)};
    height: 530px;
    min-height: unset;
    padding: 0 3rem;
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

  @media (min-width: ${bps.xl}) {
    grid-area: 2;
  }
`;

const HeroButton = styled(Button)`
  margin: 4rem 0;

  @media (min-width: ${bps.xl}) {
    grid-area: 4;

    margin: 0;
  }
`;

const Wave = styled.img`
  position: absolute;
  display: none;

  width: 101vw;
  margin-left: -0.2rem;

  @media (min-width: ${bps.md}) {
    display: block;
    bottom: -7rem;
  }

  @media (min-width: ${bps.xl}) {
    bottom: -1rem;
  }
`;

export const Hero: FC = () => {
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
      offset: -125,
    });
  }

  return (
    <HeroSection>
      <HeroWrapper>
        <HeroHeader color={colors.white}>Michał >_ Starski</HeroHeader>
        <CodePersonSVG />
        <HeroButton
          onMouseEnter={(event: SyntheticEvent) => handleButtonHover(event)}
          onMouseLeave={(event: SyntheticEvent) => handleButtonHover(event)}
          onClick={scrollDown}
        >
          <span>See my work</span>
          <BranchIcon innerRef={branchSVGRef} src={branchIcon} />
        </HeroButton>
      </HeroWrapper>
      <Wave src={wave} alt="A wave" />
    </HeroSection>
  );
};
