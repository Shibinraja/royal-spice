"use client";

//Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import EventsItem from "@/app/components/events-item/EventsItem";
import SectionTitle from "@/app/components/section-title/SectionTitle";
import { events } from "@/app/data/data";
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
            {events &&
              (events as EventsItemType[]).length > 0 &&
              events.map((slide: EventsItemType) => (
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
