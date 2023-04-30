import React, { useState } from "react";
// IMPORT BACKGROUND DESIGN ->>
import BgDesign from "../../assets/BgDesign/bgdesign.png";
// IMPORT HEADPHONE IMAGES ->>
import SliverBoseHeadPhoneImage from "../../assets/BoseHeadPhones/boseheadphone1.png";
import BlackBoseHeadPhoneImage from "../../assets/BoseHeadPhones/boseheadphone2.png";
import GoldBoseHeadPhoneImage from "../../assets/BoseHeadPhones/boseheadphone3.png";
import CyanBoseHeadPhoneImage from "../../assets/BoseHeadPhones/boseheadphone4.png";
import PinkBoseHeadPhoneImage from "../../assets/BoseHeadPhones/boseheadphone5.png";
// IMPORT HASHLINK FOR LINKS ->>
import { HashLink } from "react-router-hash-link";

function Hero() {
  //  HOOK FOR CHANGE HEAD PHONE COLOR ->>
  const [headPhoneImage, setHeadPhoneImage] = useState(
    SliverBoseHeadPhoneImage
  );

  // FUNCTION FOR CHANGE HEAD PHONE COLOR LOGIC ->>
  // CHPC MEANS CHANGE HEAD PHONE COLOR ->>
  function CHPC(HeadPhoneColor) {
    if (HeadPhoneColor === "Sliver") {
      setHeadPhoneImage(SliverBoseHeadPhoneImage);
    } else if (HeadPhoneColor === "Black") {
      setHeadPhoneImage(BlackBoseHeadPhoneImage);
    } else if (HeadPhoneColor === "Gold") {
      setHeadPhoneImage(GoldBoseHeadPhoneImage);
    } else if (HeadPhoneColor === "Cyan") {
      setHeadPhoneImage(CyanBoseHeadPhoneImage);
    } else if (HeadPhoneColor === "Pink") {
      setHeadPhoneImage(PinkBoseHeadPhoneImage);
    } else {
      setHeadPhoneImage(SliverBoseHeadPhoneImage);
    }
  }

  return (
    <>
      {/* FOR LINK ->> */}
      <div id="headphones"></div>
      {/* BACKGROUND DESIGN ->> */}
      <div className="background-design-container">
        <img src={BgDesign} draggable={false} alt="Bg-Design-Image" />
      </div>
      {/* HERO SECTION ->> */}
      <header className="hero-section">
        <div className="hero-section-box">
          {/* HERO SECTION SIDE 1 ->> */}
          <div className="hero-section-side-1">
            <h1>QuietComfort 35 wireless headphones II</h1>
            <p>Select your color:</p>
            <div className="colorfull-buttons-container">
              <div
                onClick={() => CHPC("Sliver")}
                className="colorfull-buttons"
              ></div>
              <div
                onClick={() => CHPC("Black")}
                className="colorfull-buttons"
              ></div>
              <div
                onClick={() => CHPC("Gold")}
                className="colorfull-buttons"
              ></div>
              <div
                onClick={() => CHPC("Cyan")}
                className="colorfull-buttons"
              ></div>
              <div
                onClick={() => CHPC("Pink")}
                className="colorfull-buttons"
              ></div>
            </div>
            <div className="price-items-container">
              <h3>$229.95</h3>
              <HashLink to="#related_products">
                <button className="buy-now-btn">Buy now</button>
              </HashLink>
            </div>
          </div>
          {/* HERO SECTION SIDE 2 ->> */}
          <div className="hero-section-side-2">
            <img
              className="bose-head-phone-image"
              src={headPhoneImage}
              draggable={false}
              alt="Bose-Head-Phone-Image"
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Hero;
