import React from "react";
import "./contact.css";
import SectionTitle from "@/app/components/section-title/SectionTitle";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Contact" subtitle="Contact Us" />
      </div>

      <div data-aos="fade-up">
        <iframe
          style={{ border: 0, width: "100%", height: "350px" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93615.75042284855!2d-72.27107683907724!3d42.84133925760775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e1755a27539d6b%3A0xe1381ad07fb9d46b!2sRoyal%20Spice!5e0!3m2!1sen!2sin!4v1744237033893!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="container" data-aos="fade-up">
        <div className="row mt-5">
          <div className="info">
            <div className="address">
              <i className="bi bi-geo-alt"></i>
              <h4>Location:</h4>
              <p>199 N Main St, Troy, NH 03465, United States</p>
            </div>

            <div className="open-hours">
              <i className="bi bi-clock"></i>
              <h4>Open hours:</h4>
              <p>
                Tuesday-Sunday:
                <br />
                11:30 AM - 08:00 PM
              </p>
            </div>
            <div className="email">
              <i className="bi bi-envelope"> </i>
              <h4>Email:</h4>
              <p>kannannri@gmail.com</p>
            </div>

            <div className="phone">
              <i className="bi bi-phone"> </i>
              <h4>Call:</h4>
              <p>+1 603-242-3682</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
