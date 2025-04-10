"use client";

import React, { useState, useEffect } from "react";
import "./topBar.css";

export default function TopBar() {
  const [scroll, setScroll] = useState<number>(0);

  useEffect(
    function windowScroll() {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY);
      });

      return () => {
        window.removeEventListener("scroll", () => {
          setScroll(window.screenY);
        });
      };
    },
    [scroll]
  );

  return (
    <div
      id="topbar"
      className={`d-flex align-items-center fixed-top ${
        scroll > 100 ? "topbar-scrolled" : undefined
      }`}
    >
      <div className="container d-flex justify-container-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-phone d-flex align-items-center">
            <span>+1 603-242-3682</span>
          </i>
          <i className="bi bi-clock d-flex align-items-center ms-4">
            <span> Tue-Sun: 11:30 AM - 08:30 PM</span>
          </i>
        </div>
      </div>
    </div>
  );
}
