import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

const Home = () => {
  return (
    <div className="Home">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 15000 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img
            className="mobile"
            src={process.env.PUBLIC_URL + "/img/slide1-mobile.jpg"}
            alt="slide1"
          />
          <img
            className="desktop"
            src={process.env.PUBLIC_URL + "/img/slide1.jpg"}
            alt="slide1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="mobile"
            src={process.env.PUBLIC_URL + "/img/slide2-mobile.jpg"}
            alt="slide2"
          />
          <img
            className="desktop"
            src={process.env.PUBLIC_URL + "/img/slide2.jpg"}
            alt="slide2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="mobile"
            src={process.env.PUBLIC_URL + "/img/slide3-mobile.jpg"}
            alt="slide3"
          />
          <img
            className="desktop"
            src={process.env.PUBLIC_URL + "/img/slide3.jpg"}
            alt="slide3"
          />
        </SwiperSlide>
      </Swiper>

      <div className="Home__hint">
        <span>¡Hola!, Realiza una búsqueda para iniciar el test.</span>
      </div>
    </div>
  );
};

export default Home;
