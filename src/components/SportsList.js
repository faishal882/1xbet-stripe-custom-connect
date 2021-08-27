import React, { useRef } from "react";
import "../CSS/SportsList.css";
import Sport from "./Sport";

function SportsList() {
  const refContainer = useRef(null);

  const Slide = (direction) => {
    if (direction === "left") {
      refContainer.current.scrollLeft -= 70;
    } else {
      refContainer.current.scrollLeft += 70;
    }
  };

  return (
    <>
      <container className="container-sports">
        <div className="btn-div">
          <button
            className="btn-previous btn-scroll"
            onClick={() => {
              Slide("left");
            }}
          >
            <i class="arrow left"></i>
          </button>
        </div>
        <div className="sport-options" ref={refContainer}>
          <Sport sport="Soccer" />
          <Sport sport="Tennis" />
          <Sport sport="Cricket" />
          <Sport sport="VolleyBall" />
          <Sport sport="BasketBall" />
          <Sport sport="TableTennis" />
          <Sport sport="TableTennis" />
          <Sport sport="TableTennis" />
          <Sport sport="TableTennis" />
          <Sport sport="TableTennis" />
          <Sport sport="TableTennis" />
          <Sport sport="TableTennis" />
          <Sport sport="TableTennis" />
          <Sport sport="TableTennis" />
          <Sport sport="TableTennis" />
          <Sport sport="TableTennis" />
          <Sport sport="TableTennis" />
        </div>
        <div>
          <button
            class="btn-next btn-scroll"
            onClick={() => {
              Slide("right");
            }}
          >
            <i class="arrow right"></i>
          </button>
        </div>
      </container>
    </>
  );
}

export default SportsList;
