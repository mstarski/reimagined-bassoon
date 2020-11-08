import { SwiperOptions } from "swiper";

export const SWIPER_CONFIG: SwiperOptions = {
  slidesPerView: 1,

  breakpoints: {
    576: {
      slidesPerView: 2,
    },

    992: {
      slidesPerView: 3,
    },
  },
};
