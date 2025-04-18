"use client";

import React, { useEffect } from "react";
import "./hero.css";
import HeroBtn from "@/app/components/hero-btn/HeroBtn";

const Hero = () => {
  useEffect(() => {
    // Dynamically import Glightbox only on the client side
    if (typeof window !== "undefined") {
      import("glightbox").then((module) => {
        const Glightbox = module.default;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        new (Glightbox as any)({
          selector: ".glightbox",
        });
      });
    }
  }, []);

  return (
    <section id="hero" className="d-flex align-items-center">
      <div
        className="container position-relative text-center text-lg-start"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="row">
          <div className="col-lg-8">
            <h1>
              Welcome to <span>Royal Spice Restaurant</span>
            </h1>
            <h2>The taste of India</h2>
            <h6>
              Taste the tradition, Love the Flavor: Your passage to Indian
              Gastronomy with Us.
            </h6>
            <div className="btns">
              <HeroBtn name="our menu" target="menu" />
              <HeroBtn name="order now" target="order" />
            </div>
          </div>
          <div
            className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <a
              href="https://www.youtube.com/watch?v=E0n3xMeDruM"
              className="glightbox play-btn"
            ></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
