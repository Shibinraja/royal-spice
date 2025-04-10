import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import "./nav.css";
import { navs } from "@/app/data/data";

type navListType = {
  id: number;
  name: string;
  target: string;
  active: boolean;
}[];

const Nav = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [navList, setNavList] = useState<navListType>(navs);
  const [open, setOpen] = useState<boolean>(false);
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

  useEffect(
    function checkNavActive() {
      handleNavActive();
    },
    [scroll]
  );

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  const handleScrollTo = (section: string) => {
    const header: HTMLElement | null = document.querySelector("#header");
    const offset = (header as HTMLElement).offsetHeight;
    const targetEl: HTMLElement | null = document.querySelector("#" + section);
    if (pathname === "/") {
      const elementPosition = (targetEl as HTMLElement).offsetTop;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    } else {
      router.push(`/#${section}`);
    }
  };

  const handleNavActive = () => {
    const position = scroll + 200;
    //nav add and remove class active

    setNavList(
      navList.map((nav) => {
        nav.active = false;
        const targetSection: HTMLElement = document.querySelector(
          "#" + nav.target
        )!;

        if (
          targetSection &&
          position >= targetSection.offsetTop &&
          position <= targetSection.offsetTop + targetSection.offsetHeight
        ) {
          nav.active = true;
        }
        return nav;
      })
    );
  };

  return (
    <nav
      id="navbar"
      className={`navbar order-last order-lg-0 ${
        open ? "navbar-mobile" : undefined
      }`}
    >
      <ul>
        {navList.map((nav) => (
          <li key={nav.id}>
            <a
              className={`nav-link scrollto ${
                nav.active ? "active" : undefined
              }`}
              onClick={() => handleScrollTo(nav.target)}
            >
              {nav.name === "Home" ? (
                <i className="bi bi-house-door-fill"></i>
              ) : (
                nav.name
              )}
            </a>
          </li>
        ))}
      </ul>
      <i
        className="bi bi-list mobile-nav-toggle"
        onClick={handleToggleMenu}
      ></i>
    </nav>
  );
};

export default Nav;
