import { About } from "./sections/about/About";
import Contact from "./sections/contact/Contact";
import Events from "./sections/events/Events";
import Gallery from "./sections/gallery/Gallery";
import Hero from "./sections/hero/Hero";
import Menu from "./sections/menu/Menu";
import Specials from "./sections/specials/Specials";
import Testimonials from "./sections/testimonials/Testimonials";
import WhyUs from "./sections/why-us/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />

      <main id="main">
        <About />
        <WhyUs />
        <Menu />
        <Specials />
        <Events />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
    </>
  );
}
