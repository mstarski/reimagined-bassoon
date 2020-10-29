import React, { useState } from "react";
import Swiper from "react-id-swiper";
import { Swiper as ISwiper } from "swiper";
import styled from "styled-components";

import { MockTechnologies } from "../../mocks/technologies";
import { Technology } from "../../shared/typedefs";

import { colors, fonts } from "../../shared/variables";
import { SWIPER_CONFIG } from "../../configs/swiper.config";
import { pxToRem, flexGapVertical } from "../../shared/style-utils";

import "swiper/swiper.scss";

const Container = styled.section``;

const Preview = styled.div`
  ${flexGapVertical("1rem")}
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  min-height: ${pxToRem(205)};
  padding: 1rem;
  font-family: ${fonts.ibm};
  background: ${colors.purple2};
  color: ${colors.white};

  .logo {
    width: ${pxToRem(200)};
    height: ${pxToRem(200)};
  }

  .name {
    font-family: ${fonts.fira};
    font-weight: bold;
    font-size: 1.5rem;
  }

  .description {
    max-height: ${pxToRem(200)};
    line-height: 1.2;
    overflow: auto;
  }
`;

const Carousel = styled.div``;

// !important are used to override swiper library
// that make it really hard to integrate it with styled-components
const Slide = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: ${pxToRem(205)};
  background: ${colors.white};
`;

const TechPictureContainer = styled.div`
  width: ${pxToRem(180)};
  height: ${pxToRem(180)};
`;

const TechPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Technologies = () => {
  const [technologies] = useState<Technology[]>(MockTechnologies);
  const [currentTech, setCurrentTech] = useState<Technology>(
    MockTechnologies[0]
  );

  function handleSlideChange(swiper: ISwiper) {
    const nextElementIndex: number = swiper.activeIndex;
    setCurrentTech(MockTechnologies[nextElementIndex]);
  }

  return (
    <Container>
      <Preview>
        <img
          className="logo"
          src={currentTech.logo}
          alt={`${currentTech} logo`}
        />
        <span className="name">{currentTech.name}</span>
        <p className="description">{currentTech.description}</p>
      </Preview>
      <Carousel>
        <Swiper
          on={{ slideChange: swiper => handleSlideChange(swiper) }}
          {...SWIPER_CONFIG}
        >
          {technologies.map((t, i) => (
            <Slide key={i}>
              <TechPictureContainer>
                <TechPicture src={t.logo} alt={`${t.name} logo`}></TechPicture>
              </TechPictureContainer>
            </Slide>
          ))}
        </Swiper>
      </Carousel>
    </Container>
  );
};
