"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Autoplay, Pagination } from "swiper/modules";

import SectionTitle from "@/app/components/section-title/SectionTitle";
import TestimonialsItem from "@/app/components/testimonials-item/TestimonialsItem";

import { testimonials } from "@/app/data/data";
import "./testimonials.css";

export type TestimonialItemType = {
  id: number;
  content: string;
  avatar: string;
  client: string;
};

const Testimonials = () => {
  return (
    <div>
      <section id="testimonials" className="testimonials section-bg">
        <div className="container" data-aos="fade-up">
          <SectionTitle
            title="Testimonials"
            subtitle=" What they're saying about us"
          />
          <div data-aos="fade-up" data-aos-delay="100">
            <Swiper
              slidesPerView={"auto"}
              speed={600}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                el: ".testimonials-swiper-pagination",
                type: "bullets",
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              loop={true}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 20 },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              className="testimonials-slider swiper-container"
            >
              {testimonials &&
                testimonials.length > 0 &&
                testimonials.map((slide: TestimonialItemType) => (
                  <SwiperSlide key={slide.id}>
                    <TestimonialsItem item={slide} />
                  </SwiperSlide>
                ))}
            </Swiper>
            <div className="testimonials-swiper-pagination"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
