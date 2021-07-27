import React, { useState } from "react";
import Navbar from "./Navbar";
import { Card } from "./Card";
import "../index.css";
import img3 from "./../Images/5.PNG";
import img4 from "./../Images/6.PNG";
import img2 from "./../Images/4.PNG";
import { MainCard } from "./MainCard";

export const About = () => {
  const [cardAbout, setCardAbout] = useState([
    {
      img3: img3,
      mainHead: "Card Head",
      mainText:
        "This is a wider card with supporting text below as supporting text below as",
      textColor: "text-danger",
      btText: "Submit",
      btnColor: "white",
      bgColor: "brown",
      customClasss: "btn btn-primary",
      width: "100px"
    },
    {
      img3: img3,
      mainHead: "Card Head",
      mainText:
        "This is a wider card with supporting text below as supporting text below as",
      textColor: "text-primary",
      btText: "Reg",
      btnColor: "red",
      bgColor: "white",
      customClasss: "btn btn-primary",
    },
    {
      img3: img3,
      mainHead: "Card Head",
      mainText:
        "This is a wider card with supporting text below as supporting text below as",
      textColor: "text-mute",
      btText: "Sign In",
      btnColor: "blue",
      bgColor: "gray",
      customClasss: "btn btn-primary",
    },
  ]);
  return (
    <>
      <Navbar />
      <div className="container">
        <div>
          <h1>Profile Card Third Time</h1>
        </div>
        <div className="row">
          <div className="card-deck">
            {cardAbout?.map((item) => {
              return (
                <MainCard
                  imgUrl={item.img3}
                  mainHead={item.mainHead}
                  mainText={item.mainText}
                  textColor={item.textColor}
                  mainBtn={item.mainBtn}
                  btText={item.btText}
                  btnColor={item.btnColor}
                  bgColor={item.bgColor}
                  customClasss={item.customClasss}
                  width={item.width}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
