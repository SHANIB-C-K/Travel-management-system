import React from "react";
import { Detector } from "react-detect-offline";

const OfflineDetection = (props) => {
  return (
    <>
      <Detector
        render={({ online }) =>
          online ? (
            props.children
          ) : (
            <div>
              <h1>No connection</h1>
            </div>
          )
        }
      />
    </>
  );
};

export default OfflineDetection;
