import React from "react";
// IMPORT MODEL IMAGE ->>
import modelImage from "../../assets/Models/model.png";
import ReviewerImage1 from "../../assets/Models/reviewmodelimage1.jpg";
import ReviewerImage2 from "../../assets/Models/reviewmodelimage2.jpg";
import ReviewerImage3 from "../../assets/Models/reviewmodelimage3.jpg";
// IMPORT HEAD PHONE IMAGE ->>
import specsHeadPhoneImage from "../../assets/SpecsHeadPhone/specsheadphone.png";

// IMPORT TAB ITEMS FOR SECTION ->>
import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

function Overview() {
  return (
    <>
      {/* FOR LINK ->> */}
      <div id="audio_sunglasses"></div>
      <section className="overview-section">
        <div className="overview-area">
          <div className="overview-box">
            <Tabs className="tabs" variant="unstyled">
              <div className="tab-links">
                <TabList>
                  <Tab>Overview</Tab>
                  <Tab>Specs</Tab>
                  <Tab>Reviews</Tab>
                </TabList>
              </div>
              <TabIndicator className="tab-indicator" />
              <TabPanels>
                <TabPanel>
                  <div className="tab-panel">
                    {/* TAB IMAGES ->> */}
                    <img src={modelImage} draggable={false} alt="Model-Image" />
                    {/* TAB TEXTS ->>*/}
                    <div className="tab-panel-text-box">
                      <h1>Perfect sound immersive world</h1>
                      <p>
                        QuietComfort 35 wireless headphones II are engineered
                        with renowned noise cancellation. With the Google
                        Assistant and Amazon Alexa built-in, you have instant
                        access to millions of songs, playlists and more—hands
                        free.
                      </p>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="tab-panel">
                    {/* TAB IMAGES ->> */}
                    <img
                      src={specsHeadPhoneImage}
                      draggable={false}
                      alt="Model-Image"
                    />
                    {/* TAB TEXTS ->>*/}
                    <div className="tab-panel-text-box">
                      <h1>Tech Specs</h1>
                      <p>
                        Active Noise Cancellation: Bose headphones are known for
                        their excellent noise-cancellation technology, which
                        blocks out unwanted sounds and allows you to focus on
                        your music or calls.
                      </p>
                      <p>
                        Battery Life: Bose headphones typically have long
                        battery life, ranging from 10 hours to 30 hours,
                        depending on the model.
                      </p>
                      <p>
                        Bluetooth Connectivity: Most Bose headphones use
                        Bluetooth technology to connect to your devices
                        wirelessly, making them convenient for use on-the-go.
                      </p>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="tab-panel">
                    <div className="reviews">
                      <div className="profile-container">
                        {/* REVIEWS PROFILES IMAGES -> */}
                        <img
                          src={ReviewerImage1}
                          draggable={false}
                          alt="Reviewer-Images"
                        />
                        {/* REVIEWS PROFILES NAMES -> */}
                        <h1>Liam</h1>
                      </div>
                      {/* REVIEW TEXTS -> */}
                      <p>
                        "Love my Bose headphones! Great noise-cancellation and
                        sound quality, super comfortable too!"
                      </p>
                    </div>
                    {/* REVIEWS -> */}
                    <div className="reviews">
                      {/* REVIEWS PROFILES -> */}
                      <div className="profile-container">
                        {/* REVIEWS PROFILES IMAGES -> */}
                        <img
                          src={ReviewerImage2}
                          draggable={false}
                          alt="Reviewer-Images"
                        />
                        {/* REVIEWS PROFILES NAMES -> */}
                        <h1>Ethan</h1>
                      </div>
                      {/* REVIEW TEXTS -> */}
                      <p>
                        "Bose headphones exceeded my expectations. Amazing sound
                        and noise-cancellation, worth the investment."
                      </p>
                    </div>
                    {/* REVIEWS -> */}
                    <div className="reviews">
                      {/* REVIEWS PROFILES -> */}
                      <div className="profile-container">
                        {/* REVIEWS PROFILES IMAGES -> */}
                        <img
                          src={ReviewerImage3}
                          draggable={false}
                          alt="Reviewer-Images"
                        />
                        {/* REVIEWS PROFILES NAMES -> */}
                        <h1>Noah</h1>
                      </div>
                      <p>
                        {/* REVIEW TEXTS -> */}
                        "My Bose headphones are a game-changer. Unbeatable
                        noise-cancellation and sound quality, incredibly
                        comfortable to wear for long periods of time."
                      </p>
                    </div>
                  </div>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
}

export default Overview;
