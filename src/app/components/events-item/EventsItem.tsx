/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./eventsItem.css";

const EventsItem = ({
  item,
}: {
  item: {
    id: number;
    image: string;
    title: string;
    content: string;
    details: string[];
    summary: string;
  };
}) => {
  return (
    <div className="row event-item">
      <div className="col-lg-6">
        <img src={item.image} className="img-fluid" alt={item.title} />
      </div>
      <div className="col-lg-6 pt-4 pt-lg-0 content">
        <h3>{item.title}</h3>
        <p className="fst-italic">{item.content}</p>
        <ul>
          {item.details.length > 0 &&
            item.details.map((detail, index) => (
              <li key={index}>
                <i className="bi bi-check2-circle"></i>
                {detail}
              </li>
            ))}
        </ul>
        <p>{item.summary}</p>
      </div>
    </div>
  );
};

export default EventsItem;
