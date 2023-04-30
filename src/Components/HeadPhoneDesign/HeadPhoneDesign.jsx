import React from "react";
// IMPORT MODEL IMAGE ->>
import PremiumHeadPhoneDesign from "../../assets/PremumDesign/design.png";

function HeadPhoneDesign() {
  return (
    <>
      {/* HEAD PHONE DESIGN SECTION ->> */}
      <section className="head-phone-design-section">
        <div className="head-phone-design-area">
          <div className="head-phone-design-box">
            <h1>Premium design</h1>
            <p>
              When you want to take your music anywhere, you need headphones
              built to keep up. With impact-resistant materials, glass-filled
              nylon, and corrosion-resistant stainless steel, they’re engineered
              to survive life on the go.
            </p>
            {/* MODEL IMAGE ->> */}
            <img
              src={PremiumHeadPhoneDesign}
              alt="Bose-Head-Phone-Design"
              draggable={false}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeadPhoneDesign;
