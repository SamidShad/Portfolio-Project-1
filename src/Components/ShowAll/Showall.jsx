import React from "react";
// IMPORT SLIDER ->>
import RelatedProductsSlider from "../RelatedProducts/RelatedProductsSlider";

function Showall() {
  return (
    <>
      <div className="show_all_products_container">
        <div className="show_all_products_box">
          <h1 className="show_all_products_text">Show All Products</h1>
          {/* SHOW 2 SLIDERS ->> */}
          <div className="RelatedProductsSlider">
            <RelatedProductsSlider centeredSlides={false} />
          </div>
          <div className="RelatedProductsSlider">
            <RelatedProductsSlider centeredSlides={false} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Showall;
