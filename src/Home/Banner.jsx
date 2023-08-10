import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {

  
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/fxqd3XS/png-20230802-004918-0000.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/vqGNKFQ/png-20230802-005345-0000.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/qYFC8wJ/png-20230801-234216-0000.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/MNPTr5P/png-20230802-011409-0000.png"/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;