import React, { useState } from "react";
import "../index.css";
import Navbar from "./Navbar";
import img3 from "./../Images/3.PNG";
import { Button } from "./button";

// import React from 'react'

export const Card = (props) => {
  const { cardTitle, cardText, imgUrl, pclass, cardImg } = props;

  return (
    <div className={`card ${cardImg}`}>
      <div className="b-img">
        <img className="card-img-top" src={imgUrl} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title mt-50">{cardTitle}</h5>
          <p className={`card-text ${pclass}`}>{cardText}</p>
        </div>
      </div>
    </div>
  );
};
