import ErrorBoundary from "./errorboundary";
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
        <ErrorBoundary>
          <About />
        </ErrorBoundary>
        <ErrorBoundary>
          <WhyUs />
        </ErrorBoundary>
        <ErrorBoundary>
          <Menu />
        </ErrorBoundary>
        <ErrorBoundary>
          <Specials />
        </ErrorBoundary>
        <ErrorBoundary>
          <Events />
        </ErrorBoundary>
        <ErrorBoundary>
          <Testimonials />
        </ErrorBoundary>
        <ErrorBoundary>
          <Gallery />
        </ErrorBoundary>
        <ErrorBoundary>
          <Contact />
        </ErrorBoundary>
      </main>
    </>
  );
}
