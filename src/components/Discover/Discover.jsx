import React from "react";

import "./Discover.css";

function Discover() {
  return (
    <div className="disc">
      
      <h1 className="title">Discover The Most <br />Attractive places </h1>

      <div className="main">
        <div className="data1 file">
          <h2 className="filename">Bali</h2>
          <span className="detail">24 tours available</span>
        </div>

        <div className="data2 file">
          <h2 className="filename">Hawaii</h2>
          <span className="detail">15 tours available</span>
        </div>

        <div className="data3 file">
          <h2 className="filename">Hvar</h2>
          <span className="detail">18 tours available</span>
        </div>

        <div className="data4 file">
          <h2 className="filename">whitehaven</h2>
          <span className="detail">32 tours available</span>
        </div>
      </div>
    </div>
  );
}

export default Discover;
