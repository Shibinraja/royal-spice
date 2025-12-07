"use client";

import React, { useState } from "react";
import "./heroBtn.css";
import Modal from "../modal/Modal";

export default function HeroBtn({
  name,
  target,
}: {
  name: string;
  target: string;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleScrollTo = (section: string) => {
    if (section === "order") {
      setIsOpen(true); // open modal explicitly
      return;
    }
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with id="${section}" not found.`);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => handleScrollTo(target)}
        className={`btn-hero animated fadeInUp scrollto ${
          name.toLowerCase().includes("order") ? "ms-4" : ""
        }`}
      >
        {name}
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}