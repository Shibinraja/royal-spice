import React from "react";
import aboutImage from "../../../../public/assets/img/about.jpg";
import Image from "next/image";
import "./about.css";


export const About = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div
            className="col-lg-6 order-1 order-lg-2 aos-init aos-animate"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="about-img">
              <Image src={aboutImage} alt="restaurant-about" />
            </div>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>
              Royal Spice is a celebration of authentic Indian flavors and
              culinary traditions.
            </h3>

            <p className="fst-italic pt-4">
              We are dedicated to crafting exquisite dishes that bring the
              richness of India&apos;s cuisine to your table. Whether
              you&apos;re craving bold spices or subtle, aromatic flavors
            </p>

            <ul className="pt-4">
              <li>
                <i className="bi bi-check-circle"> </i>
                Authentic Culinary Experience: Offers genuine Nepalese and
                Indian cuisine.
              </li>
              <li>
                <i className="bi bi-check-circle"> </i>
                Cultural Journey: A menu that reflects the rich flavors and
                vibrant culture of India.
              </li>
              <li>
                <i className="bi bi-check-circle"> </i>
                Attentive Service: Friendly staff ensuring an exceptional dining experience.
              </li>
              <li>
                <i className="bi bi-check-circle"> </i>
                Memorable Moments: Perfect for family dinners, romantic
                evenings, or casual outings.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
