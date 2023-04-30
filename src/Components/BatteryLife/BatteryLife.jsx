import React from "react";
// IMPORT MODEL ->>
import BatteryLifeModel from "../../assets/Models/batterylifemodel.png";

function BatteryLife() {
  return (
    <>
      {/* FOR LINK ->> */}
      <div id="support"></div>
      {/* BATTERY LIFE SECTION ->> */}
      <section className="battery-life-section">
        <div className="battery-life-area">
          <div className="battery-life-box">
            <div className="battery-life-text-box">
              <h1>Up to 20 hours battery life</h1>
              <p>
                Enjoy up to 20 hours of listening, enough time to pore through
                this entire playlist. So you can keep the music — or the quiet —
                going all day long. And when it finally runs down, a quick
                15-minute charge gives you another 2.5 hours.
              </p>
            </div>
            <img
              src={BatteryLifeModel}
              draggable={false}
              alt="Battery-Life-Model"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default BatteryLife;
