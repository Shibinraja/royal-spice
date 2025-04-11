"use client";

import Preloader from "@/app/components/preloader/PreLoader";
import SectionTitle from "@/app/components/section-title/SectionTitle";
import SpecialsItem from "@/app/components/specials-item/SpecialsItem";
import { specialFilters, specials } from "@/app/data/data";
import { useState } from "react";
import "./specials.css";

type specialMenuItem = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  content: string;
  active: boolean;
};

const Specials = () => {
  const [items, setItems] = useState<unknown | []>(specials);

  const handleFilterActive = (id: number) => {
    specialFilters.map((filter) => {
      filter.active = false;
      if (filter.id === id) filter.active = true;
    });
  };

  const handleSpecialChange = (id: number) => {
    handleFilterActive(id);
    const updatedItems = (items as Array<specialMenuItem>).map(
      (item: specialMenuItem) => {
        item.active = false;
        if (item.id === id) item.active = true;
        return item;
      }
    );

    setItems(updatedItems);
  };

  return (
    <section id="specials" className="specials">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Specials" subtitle="Check our Specials" />
        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
              {specialFilters.map((filter) => (
                <li className="nav-item" key={filter.id}>
                  <a
                    className={`nav-link ${filter.active ? "active show" : ""}`}
                    onClick={() => handleSpecialChange(filter.id)}
                  >
                    {filter.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-9 mt-4 mt-lg-0">
            <div className="tab-content">
              {!items ? (
                <Preloader />
              ) : (items as Array<specialMenuItem>).length > 0 ? (
                (items as Array<specialMenuItem>).map(
                  (item: {
                    id: number;
                    image: string;
                    title: string;
                    subtitle: string;
                    content: string;
                    active: boolean;
                  }) => <SpecialsItem key={item.id} item={item} />
                )
              ) : (
                <Preloader />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specials;
