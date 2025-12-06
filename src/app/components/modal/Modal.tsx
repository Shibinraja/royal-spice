/* eslint-disable @next/next/no-img-element */
import React, { SetStateAction } from "react";
import "./modal.css";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
};

const Modal: React.FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  const closeModal = () => setIsOpen(false);

  const handleOrderLink = (orderLink: string) => {
    if (orderLink === "Toast") {
      window.open(
        "https://order.toasttab.com/online/royal-spice-troy",
        "_blank"
      );
    }

    if (orderLink === "Smore") {
      window.open(
        "https://www.smorefood.com/jpl6pd7s/royal-spice-troy-03465/order-online?menu=All+Day+Menu",
        "_blank"
      );
    }
  };
  return (
    <>
      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setIsOpen(false)}>
              &times;
            </span>

            <div className="image-wrapper">
              <img
                src="/assets/img/food-delivery.png"
                alt="Food Delivery"
                className="modal-image-full"
              />
            </div>

            <div className="button-group">
              <button
                className="order-btn toast-btn"
                onClick={() => handleOrderLink("Toast")}
              >
                Order Toast
              </button>

              <button
                className="order-btn snore-btn"
                onClick={() => handleOrderLink("Smore")}
              >
                Order Smore
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
