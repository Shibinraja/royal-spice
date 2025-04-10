"use client";

import React, { useState, useEffect } from "react";
import "./header.css";
import Image from "next/image";
import Link from "next/link";
import AppBtn from "../app-btn/AppBtn";
import Nav from "../navbar/Nav";

export default function Header() {
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
    <header
      id="header"
      className={`fixed-top d-flex align-items-center ${
        scroll > 100 ? "header-scrolled" : undefined
      }`}
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
        <h1 className="logo me-auto me-lg-0">
          <Link href="/">Royal Spice</Link>
        </h1>
        {/*image logo */}
        <a href="index.html" className="logo me-auto me-lg-0">
          {/* <img src="assets/img/logo.png" alt="" className="img-fluid"/> */}
          <Image
            src="/assets/img/logo.png"
            alt="Logo"
            layout="responsive"
            width={500}
            height={300}
            className="img-fluid"
          />
        </a>
        <Nav/>
        <AppBtn name="Order Now"/>
      </div>
    </header>
  );
};
