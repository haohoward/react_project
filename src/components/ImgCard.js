import React from "react";
import "../styles/ImgCard.scss";

export default function ImgCard({ imgUrl, title, price,type}) {
  return (
    <div className="content__card">
     <img className="content__card--imgBox" src={imgUrl} alt="" />  
        <div className="content__card--title">{title}</div>
        <div className="content__card--price">{price}</div>
        <div className="content__card--type">{type}</div>
    </div>
  );
}