/* eslint-disable @next/next/no-img-element */
import React from "react";
import { TestimonialItemType } from "@/app/sections/testimonials/Testimonials";
import "./testimonialsItem.css";

const TestimonialsItem: React.FC<{ item: TestimonialItemType }> = ({
  item,
}) => {
  return (
    <div className="testimonial-item">
      <p>
        <i className="bx bxs-quote-alt-left quote-icon-left">
          {item.content}
          <i className="bx bxs-quote-alt-right quote-icon-right"></i>
        </i>
      </p>
      <img src={item.avatar} className="testimonial-img" alt={item.client} />
      <h3>{item.client}</h3>
    </div>
  );
};

export default TestimonialsItem;
