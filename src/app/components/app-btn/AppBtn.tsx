import React from "react";
import "./appBtn.css";

const AppBtn = ({ name }: { name: string }) => {
  const handleToastOrder = () => {
    // window.open(
    //   "https://order.online/store/royal-spice-troy-31542105",
    //   "_blank"
    // );
    window.open(
      "https://order.toasttab.com/online/royal-spice-troy",
      "_blank"
    );
  };
  return (
    <a className="app-btn scrollto d-none d-lg-flex" onClick={handleToastOrder}>
      {name}
    </a>
  );
};

export default AppBtn;
