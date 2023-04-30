import React, { useState } from "react";

// IMPORT ICON ->>
import { RxCross1 as CloseIcon } from "react-icons/rx";

// IMPORT PRODUCT IMAGES ->>
import Product1 from "../../assets/Products/product1.png";
import Product2 from "../../assets/Products/product2.png";
import Product3 from "../../assets/Products/product3.png";
import Product4 from "../../assets/Products/product4.png";
import Product5 from "../../assets/Products/product5.png";

// IMPORT SLIDER ITEMS ->>
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

// IMPORT SLIDER STYLES ->>
import "swiper/css";
import "swiper/css/free-mode";

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

function ProductSider() {
  // SHOW PRODUCT IMAGE SET BY HOOK ->>
  const [productImage, setProductImage] = useState(null);

  // SHOW PRODUCT IMAGE LOGIC ->>
  function showProductImage(productImage) {
    setProductImage(productImage);
  }

  // CLOSE PRODUCT IMAGE LOGIC ->>
  function closeProductScreen() {
    setProductImage(null);
  }

  return (
    <>
      {/* FOR LINK ->> */}
      <div id="speakers"></div>
      <div className="product-slider-area">
        {/* SHOW PRODUCT ->> */}
        {productImage && (
          <div className="show-product-screen">
            <div className="show-image-container">
              {/* CLOSE BUTTON ->> */}
              <CloseIcon
                className="close-btn"
                color="white"
                size={30}
                onClick={closeProductScreen}
              />
              {/* PRODUCT IMAGE ->> */}
              <img src={productImage} alt="Bose-Products" />
            </div>
          </div>
        )}
        <div className="product-slider-container">
          {/* SLIDER ->> */}
          <Swiper
            slidesPerView={4}
            spaceBetween={50}
            freeMode={true}
            modules={[FreeMode]}
            className="mySwiper"
            breakpoints={breakpoints}
          >
            <SwiperSlide>
              {/* PRODUCT IMAGES ->> */}
              <img
                className="products-images"
                src={Product1}
                onClick={() => showProductImage(Product1)}
                alt="Bose-Products"
              />
            </SwiperSlide>
            <SwiperSlide>
              {/* PRODUCT IMAGES ->> */}
              <img
                className="products-images"
                src={Product2}
                onClick={() => showProductImage(Product2)}
                alt="Bose-Products"
              />
            </SwiperSlide>
            <SwiperSlide>
              {/* PRODUCT IMAGES ->> */}
              <img
                className="products-images"
                src={Product3}
                onClick={() => showProductImage(Product3)}
                alt="Bose-Products"
              />
            </SwiperSlide>
            <SwiperSlide>
              {/* PRODUCT IMAGES ->> */}
              <img
                className="products-images"
                src={Product4}
                onClick={() => showProductImage(Product4)}
                alt="Bose-Products"
              />
            </SwiperSlide>
            <SwiperSlide>
              {/* PRODUCT IMAGES ->> */}
              <img
                className="products-images"
                src={Product5}
                onClick={() => showProductImage(Product5)}
                alt="Bose-Products"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default ProductSider;
