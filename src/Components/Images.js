import React, { useState } from "react";
import "../index.css";
import Navbar from "./Navbar";
import img3 from "./../Images/3.PNG";
import {Button} from "./button"

export const Images = () => {
  const [cardList, setCardList] = useState([
    {
      imgUrl: img3,
       btnBgColor: "orange",
       textColor:"text-primary",
       cardTitle: "Card Title",
       cardText: "This is a wider card with supporting text below as a n supporting text below as",
    },
    {
        imgUrl: img3,
        textColor:"text-danger",
        btnBgColor: "green",
        cardTitle: "Card Title",
        cardText: "This is a wider card with supporting text below as a supporting text below as ",
    },
    {
        imgUrl: img3,
        btnBgColor: "blue",
        textColor:"text-default",
        cardTitle: "Card Title",
        cardText: "This is a wider card with supporting text below as a supporting text below as ",
    },
    {
        imgUrl: img3,
        textColor:"text-secondary",
      btnBgColor: "yellow",
      bgColor:"red",
      cardTitle: "Card Title",
      cardText: "This is a wider card with supporting text below as a supporting text below as",
    },
  ]);
  return (
    <>
      <Navbar />
      <div className="container">
        <div>
          <h1>Profile Design Card</h1>
        </div>
        <div className="row">
          <div className="card-deck">
            {cardList?.map((item, index) => {
              return (
                <div className="card">
                  <div className="b-img">
                    <img
                      className="card-img-top"
                      src={item.imgUrl}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title mt-50">{item.cardTitle}</h5>
                      <p className={`card-text ${item.textColor}`}>{item.cardText}</p>
                    </div>
                  </div>
                  <Button fontSize="14px" btnText="click" clr="red" bgColor={item.btnBgColor} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
