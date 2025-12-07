"use client";

import React, { useState } from "react";
import "./appBtn.css";
import Modal from "../modal/Modal";

const AppBtn = ({ name }: { name: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToastOrder = (e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();
    setIsOpen(true);
  };

  return (
    <>
      <button
        type="button"
        className="app-btn scrollto d-none d-lg-flex"
        onClick={handleToastOrder}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        {name}
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default AppBtn;
