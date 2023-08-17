import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";


const Arrival = () => {


    return (
        <section className="my-10 w-[90%] mx-auto">
           
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="">
                        <img className='w-full' src=" https://i.ibb.co/zZjpnd5/images-3.jpg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/59QG2zm/FB-IMG-1690086781013.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/cc6TXTM/FB-IMG-1690096856313.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/ZHY5dKd/FB-IMG-1690052165310.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/Vmr8yNZ/FB-IMG-1690052128298.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/CHF4k96/FB-IMG-1690086785913.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/NtD8KmG/FB-IMG-1690053038306.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/jTyRYtv/FB-IMG-1690096862344.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/mJjgnGV/FB-IMG-1690086778831.jpg" />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Arrival;

