import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { MockTechnologies } from "../../mocks/technologies";
import { Technology } from "../../shared/typedefs";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import { colors } from "../../shared/variables";

const Container = styled.section``;

const Preview = styled.div``;

const Carousel = styled.div``;

const Slide = styled(SwiperSlide)`
  width: 140px;
  height: 205px;
  background: ${colors.gray};
`;

export const Technologies = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [currentTech, setCurrentTech] = useState<Technology>(
    MockTechnologies[0]
  );

  // This will be replaced with an actual API call to the CMS
  useEffect(() => {
    setTechnologies(MockTechnologies);
  }, []);

  return (
    <Container>
      <Preview></Preview>
      <Carousel>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
        >
          {technologies.map((t, i) => (
            <SwiperSlide key={i}>{t.name}</SwiperSlide>
          ))}
        </Swiper>
      </Carousel>
    </Container>
  );
};
