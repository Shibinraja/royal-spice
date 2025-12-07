"use client";

import React, { useState } from "react";
import "./appBtn.css";
import Modal from "../modal/Modal";

const AppBtn = ({ name }: { name: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleToastOrder = () => {
    // window.open(
    //   "https://order.online/store/royal-spice-troy-31542105",
    //   "_blank"
    // );
    // window.open("https://order.toasttab.com/online/royal-spice-troy", "_blank");
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <a
        className="app-btn scrollto d-none d-lg-flex"
        onClick={handleToastOrder}
      >
        {name}
      </a>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default AppBtn;
