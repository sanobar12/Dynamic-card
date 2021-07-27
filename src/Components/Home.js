import React, { useState } from "react";
import "../index.css";
import { Card } from "./Card";
import Navbar from "./Navbar";
import img3 from "./../Images/6.PNG"; 
export const Home = () => {
  const [cardList, setCardList] = useState([
    {
      imgUrl: img3,
      cardT: "Card Title",
      cardP:
        "This is a wider card with supporting text below as a n supporting text below as",
    },
    {
      imgUrl: img3,
      cardT: "Card Title",
      cardP:
        "This is a wider card with supporting text below as a n supporting text below as",
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
            {cardList?.map((item) => {
              return (
                <Card
                  cardTitle={item.cardT}
                  imgUrl={item.imgUrl}
                  cardText={item.cardP}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
