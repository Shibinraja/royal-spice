"use client";
import React, { useState, useEffect } from "react";
import "./menu.css";
import SectionTitle from "@/app/components/section-title/SectionTitle";
import { filters } from "@/app/data/data";
import MenuItem from "@/app/components/menu-item/MenuItem";
import Preloader from "@/app/components/preloader/PreLoader";

const Menu = () => {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);

  const getMenuData = () => {
    fetch("http://localhost:3000/api/menu")
      .then((res) => res.json())
      .then((menu) => setData(menu))
      .catch((e) => console.log(e.message));
  };

  useEffect(function fetchMenuData() {
    getMenuData();
  }, []);

  useEffect(
    function setMenuItem() {
      setItems(
        data.filter(
          (items: { category: string }) => items.category === "appetizers"
        )
      );
    },
    [data]
  );

  const handleFilterActive = (id: number) => {
    filters.map((filter) => {
      filter.active = false;
      if (filter.id === id) filter.active = true;
    });
  };

  const handleFilterChange = (id: number, category: string) => {
    handleFilterActive(id);
    setItems(
      data.filter((items: { category: string }) => items.category === category)
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
            items.map(
              (item: {
                id: number;
                name: string;
                preview: string;
                price: number;
                ingredients: string;
              }) => <MenuItem key={item.id} item={item} />
            )
          ) : (
            <Preloader />
          )}
        </div>

        <a href="/assets/menu.pdf" target="_blank" className="bouncing-text">
          Click Here to Download the Full Menu &#128072;
        </a>
      </div>
    </section>
  );
};

export default Menu;
