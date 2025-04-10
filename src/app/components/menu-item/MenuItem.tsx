/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./menuItem.css";

const MenuItem = ({
  item,
}: {
  item: {
    id: number;
    name: string;
    preview: string;
    price: number;
    ingredients: string;
  };
}) => {
  return (
    <div className="col-lg-6 menu-item">
      <img src={item.preview} className="menu-img" alt={item.name} />
      <div className="menu-content">
        <span>{item.name}</span>
        <span>${item.price}</span>
      </div>
      <div className="menu-ingredients">{item.ingredients}</div>
    </div>
  );
};

export default MenuItem;
