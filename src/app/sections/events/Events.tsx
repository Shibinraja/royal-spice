"use client";
import React, { useState, useEffect } from "react";

//Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import SectionTitle from "@/app/components/section-title/SectionTitle";
import EventsItem from "@/app/components/events-item/EventsItem";
import "./events.css";

type EventsItemType = {
  id: number;
  image: string;
  title: string;
  content: string;
  details: string[];
  summary: string;
};

const Events = () => {
  const [slides, setSlides] = useState<EventsItemType[] | []>([]);

  const getEventsData = () => {
    fetch("http://localhost:3000/api/events")
      .then((res) => res.json())
      .then((data) => setSlides(data))
      .catch((e) => console.error(e.message));
  };

  useEffect(function fetchEventData() {
    getEventsData();
  }, []);

  
  return (
    <section id="events" className="events">
      <div className="container" data-aos="fade-up">
        <SectionTitle
          title="Events"
          subtitle="Organize Your Events in our Restaurant"
        />
        <div data-aos="fade-up" data-aos-delay="100">
          <Swiper
            spaceBetween={0}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".swiper-pagination",
              type: "bullets",
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            loop={true}
            className="events-slider swiper-container"
          >
            {slides &&
              (slides as EventsItemType[]).length > 0 &&
              slides.map((slide: EventsItemType) => (
                <SwiperSlide key={slide.id}>
                  <EventsItem item={slide} />
                </SwiperSlide>
              ))}
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Events;
