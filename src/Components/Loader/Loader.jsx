import React, { useState, useEffect } from "react";
// IMPORT LOADER ->>
import { Bars } from "react-loader-spinner";

function Loader() {
  // DEFINE THAT IS LOADING OR NOT ->>
  const [isloading, setIsloading] = useState(true);

  // LOADING LOGIC ->>
  useEffect(() => {
    setIsloading(false);
  }, []);

  return (
    <>
      {/* // LOADING SCREEN ->> */}
      {isloading && (
        <div className="loader-screen">
          {/* // LOADING ANIMATED ICON  ->> */}
          <Bars color="black" width={50} />
        </div>
      )}
    </>
  );
}

export default Loader;
