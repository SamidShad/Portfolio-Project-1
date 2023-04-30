import React from "react";
// IMPORT SLIDER ->>
import RelatedProductsSlider from "./RelatedProductsSlider";
// IMPORT HASHLINK FOR LINKS ->>
import { HashLink } from "react-router-hash-link";

function RelatedProducts() {
  return (
    <>
      {/* FOR LINK ->> */}
      <div id="related_products"></div>
      <section className="related-products">
        <div className="related-products-area">
          <div className="related-products-box">
            <div className="related-products-button-text-box">
              <h1>Related products</h1>
              <HashLink to="/show_all">
                <button className="show-all-btn">Show All</button>
              </HashLink>
            </div>
            {/* RELATED PRODUCTS SLIDER ->> */}
            <div className="related-products-slider">
              <RelatedProductsSlider centeredSlides={true} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RelatedProducts;
