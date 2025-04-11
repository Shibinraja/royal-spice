/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./menuItem.css";
import { MenuItemType } from "@/app/sections/menu/Menu";

const MenuItem = ({
  item,
}: {
  item: MenuItemType
}) => {
  return (
    <div className="col-lg-6 menu-item">
      <img src={item.preview} className="menu-img" alt={item.name} />
      <div className="menu-content">
        <span>{item.name}</span>
        <span>${item.price}</span>
      </div>
      <div className="menu-ingredients">{item.description}</div>
    </div>
  );
};

export default MenuItem;
