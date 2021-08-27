import React from "react";
import "../CSS/LiveBets.css";
import BetsSection from "./BetsSection";
import SportsList from "./SportsList";

function LiveBets() {
  return (
    <div>
      <container className="container-flex">
        <container className="livebets">
          <div className="livebets-header">LIVE BETS</div>
          <div className="livebets-sports">
            <SportsList />
          </div>
          <div className="livebets-matches"></div>
        </container>
        <BetsSection />
      </container>
    </div>
  );
}

export default LiveBets;
