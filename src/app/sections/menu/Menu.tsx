"use client";
import React, { useState, useEffect } from "react";
import "./menu.css";
import SectionTitle from "@/app/components/section-title/SectionTitle";
import { filters, menu } from "@/app/data/data";
import MenuItem from "@/app/components/menu-item/MenuItem";
import Preloader from "@/app/components/preloader/PreLoader";

export interface MenuItemType {
  id: number;
  name: string;
  price: number;
  category: string;
  preview: string;
  description?: string;
}

const Menu = () => {
  const [items, setItems] = useState<MenuItemType[]>([]);

  useEffect(function setMenuItem() {
    setItems(
      menu.filter(
        (items: { category: string }) => items.category === "appetizers"
      )
    );

    console.log(items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFilterActive = (id: number) => {
    filters.map((filter) => {
      filter.active = false;
      if (filter.id === id) filter.active = true;
    });
  };

  const handleFilterChange = (id: number, category: string) => {
    handleFilterActive(id);
    setItems(
      menu.filter((items: { category: string }) => items.category === category)
    );
  };

  return (
    <section id="menu" className="menu section-bg">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Our Menu" subtitle="Check Our Tasty Menu" />

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="menu-filters">
              <ul id="menu-filters">
                {filters.map((filter) => (
                  <li
                    key={filter.id}
                    className={`${filter.active ? "filter-active" : undefined}`}
                    onClick={() =>
                      handleFilterChange(filter.id, filter.category)
                    }
                  >
                    {filter.name}
                  </li>
                ))}
              </ul>
            </ul>
          </div>
        </div>
        <div
          className="row menu-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {!items ? (
            <Preloader />
          ) : items.length > 0 ? (
            items.map((item: MenuItemType) => (
              <MenuItem key={item.id} item={item} />
            ))
          ) : (
            <Preloader />
          )}
        </div>

        <div className="flex justify-center flex-col items-end ">
          <a href="/assets/dine_menu.pdf" target="_blank" className="bouncing-text">
            Click Here to Download the Dine-In Menu &#128072;
          </a>

          <a href="/assets/take_menu.pdf" target="_blank" className="bouncing-text">
            Click Here to Download the Take-Out Menu &#128072;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
