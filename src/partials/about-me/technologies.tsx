import React, { useState } from "react";
import Swiper from "react-id-swiper";
import styled from "styled-components";

import { MockTechnologies } from "../../mocks/technologies";
import { Technology } from "../../shared/typedefs";

import { colors, fonts, bps } from "../../shared/variables";
import { SWIPER_CONFIG } from "../../configs/swiper.config";
import { pxToRem } from "../../shared/style-utils";

import "swiper/swiper.scss";

const Container = styled.section`
  padding-top: 7rem;
  background: ${colors.white};
`;

const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${pxToRem(250)};
  height: ${pxToRem(250)};

  img {
    height: 60%;
    object-fit: cover;
    filter: grayscale(1);
  }
`;

const Header = styled.h2`
  width: 90%;
  margin: auto;
  text-align: center;
  font-family: ${fonts.ibm};
  font-size: 2rem;
  font-weight: bold;
  color: #bdbdbd;

  @media (min-width: ${bps.lg}) {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
`;

export const Technologies = () => {
  const [technologies] = useState<Technology[]>(MockTechnologies);

  return (
    <Container>
      <Header>Technologies that I'm using</Header>
      <Swiper {...SWIPER_CONFIG}>
        {technologies.map((t, i) => (
          <Slide key={i}>
            <img src={t.logo} alt={t.name} />
          </Slide>
        ))}
      </Swiper>
    </Container>
  );
};
