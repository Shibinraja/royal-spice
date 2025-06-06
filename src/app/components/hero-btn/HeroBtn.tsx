import React from "react";
import "./heroBtn.css";

export default function HeroBtn({
  name,
  target,
}: {
  name: string;
  target: string;
}) {
  // Function to scroll to the specified section
  const handleScrollTo = (section: string) => {
    if (section === "order") {
      // window.open(
      //   "https://order.online/store/royal-spice-troy-31542105",
      //   "_blank"
      // );
      window.open(
        "https://order.toasttab.com/online/royal-spice-troy",
        "_blank"
      );
    } else {
      const element = document.getElementById(section); // Find the element by its ID
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly to the element
      } else {
        console.error(`Element with id="${section}" not found.`);
      }
    }
  };

  return (
    <a
      onClick={(e) => {
        e.preventDefault(); // Prevent default anchor behavior
        handleScrollTo(target); // Call the scroll function
      }}
      className={`btn-hero animated fadeInUp scrollto ${
        name.includes("order") ? "ms-4" : undefined
      }`}
    >
      {name}
    </a>
  );
}
