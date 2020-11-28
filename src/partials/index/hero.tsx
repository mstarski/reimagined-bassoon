import React, { FC, useRef, SyntheticEvent } from "react";
import styled from "styled-components";
import SVG from "react-inlinesvg";
import { scroller } from "react-scroll";

import { bps, colors, fonts } from "../../shared/variables";
import { maxContentWidth } from "../../shared/style-utils";

import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import { CodePersonSVG } from "../../components/CodePersonSVG/CodePersonSVG";

//@ts-ignore
import branchIcon from "../../images/code-branch-solid.svg";

//@ts-ignore
import wave from "../../images/wave.svg";

const HeroSection = styled.section`
  position: relative;
  padding-top: 5rem;

  font-family: ${fonts.fira};
  font-weight: 700;
  background: ${colors.purple3};
`;

const HeroWrapper = styled.div`
  ${maxContentWidth()}

  position: relative;
  z-index: 1;

  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-gap: 3rem;

  @media (min-width: ${bps.xl}) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: end;
    grid-gap: 0 3rem;
    grid-template-rows: auto 60px;
    padding: 5rem 2rem;
  }
`;

const BranchIcon = styled(SVG)`
  width: 2rem;
  height: 2rem;
`;

const HeroHeader = styled(Header)`
  @media (min-width: ${bps.md}) {
    width: 20rem;
  }

  @media (min-width: ${bps.xl}) {
    width: unset;
    font-size: 5.5rem;
    justify-self: start;
    margin: 0;
  }
`;

const HeroButton = styled(Button)`
  @media (min-width: ${bps.xl}) {
    justify-self: start;
  }
`;

const Wave = styled.img`
  margin-top: 2rem;
  margin-bottom: -1rem;
  width: 100vw;
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
    // scroller.scrollTo("showcase-header", {
    //   duration: 900,
    //   smooth: true,
    //   offset: 100,
    // });
  }

  return (
    <HeroSection>
      <HeroWrapper>
        <HeroHeader color={colors.white}>Michał &gt;_ Starski</HeroHeader>
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
