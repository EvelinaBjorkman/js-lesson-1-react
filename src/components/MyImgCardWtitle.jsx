import React from "react";

export default function MyImgCardWtitle( { imgSrc, title }) {
  return (
    <div className="my_img_cardWtitle">
      <img className="my_img_card_img" src={imgSrc} alt="" />
      <div className="my_img_card_title">{title}</div>
    </div>
  );
}
