import React from "react";
// IMPORT SLIDER COMPONENTS ->>
import { Swiper, SwiperSlide } from "swiper/react";
// IMPORT SLIDER IMAGES ->>
import AdHeadPhoneProduct1 from "../../assets/AdProducts/adproduct1.png";
import AdHeadPhoneProduct2 from "../../assets/AdProducts/adproduct2.png";
import AdHeadPhoneProduct3 from "../../assets/AdProducts/adproduct3.png";
import AdHeadPhoneProduct4 from "../../assets/AdProducts/adproduct4.png";
// IMPORT HASHLINK FOR LINKS ->>
import { HashLink } from "react-router-hash-link";
// IMPORT SLIDER COMPONENTS STYLES ->>
import "swiper/css";
import "swiper/css/pagination";

// BREAKPOINTS ->>
const breakpoints = {
  1200: {
    slidesPerView: 4,
    spaceBetween: 50,
  },

  900: {
    slidesPerView: 3,
  },

  600: {
    slidesPerView: 2,
    spaceBetween: 50,
  },

  590: {
    slidesPerView: 1,
    spaceBetween: -50,
  },

  385: {
    slidesPerView: 1,
    spaceBetween: -50,
  },

  285: {
    slidesPerView: 1,
    spaceBetween: 10,
  },

  100: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
};

function Slider({ centeredSlides }) {
  return (
    <>
      {/* SLIDER ->> */}
      <Swiper
        slidesPerView={4}
        spaceBetween={50}
        breakpoints={breakpoints}
        centeredSlides={centeredSlides}
        className="mySwiper"
      >
        {/* BOSE HEAD PHONE AD CARDS ->> */}
        <SwiperSlide>
          <HashLink to="/view_product/QuietComfort">
            <div className="head-phone-buy-card">
              {/* BOSE HEAD PHONE IMAGES ->> */}
              <img src={AdHeadPhoneProduct1} alt="Bose-Head-Phone-Images" />
              <div className="head-phone-buy-card-text-box">
                <h1>QuietComfort 35 wireless headphones II</h1>
                <p>$199.00</p>
              </div>
            </div>
          </HashLink>
        </SwiperSlide>
        <SwiperSlide>
          <HashLink to="/view_product/SoundLink®">
            <div className="head-phone-buy-card">
              {/* BOSE HEAD PHONE IMAGES ->> */}
              <img src={AdHeadPhoneProduct2} alt="Bose-Head-Phone-Images" />
              <div className="head-phone-buy-card-text-box">
                <h1>SoundLink® aroundear wireless headphones</h1>
                <p>$269.99</p>
              </div>
            </div>
          </HashLink>
        </SwiperSlide>
        <SwiperSlide>
          <HashLink to="/view_product/Boseon-ear ">
            <div className="head-phone-buy-card">
              {/* BOSE HEAD PHONE IMAGES ->> */}
              <img src={AdHeadPhoneProduct3} alt="Bose-Head-Phone-Images" />
              <div className="head-phone-buy-card-text-box">
                <h1>Bose on-ear wireless headphones</h1>
                <p>$209.99</p>
              </div>
            </div>
          </HashLink>
        </SwiperSlide>
        <SwiperSlide>
          <HashLink to="/view_product/BoseNoiseCancelling">
            <div className="head-phone-buy-card">
              {/* BOSE HEAD PHONE IMAGES ->> */}
              <img src={AdHeadPhoneProduct4} alt="Bose-Head-Phone-Images" />
              <div className="head-phone-buy-card-text-box">
                <h1>Bose Noise Cancelling Headphones 700</h1>
                <p>$379.00</p>
              </div>
            </div>
          </HashLink>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
