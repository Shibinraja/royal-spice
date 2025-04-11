import SectionTitle from "@/app/components/section-title/SectionTitle";
import WhyUsCard from "@/app/components/whyus-card/WhyUsCard";
import React from "react";
import "./whyUs.css"
import { whyUs } from "@/app/data/data";

const WhyUs = () => {
  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <SectionTitle title="why us" subtitle="Why Choose Our Restaurant" />
        <div className="row">
          {whyUs &&
            whyUs.length > 0 &&
            whyUs.map(
              (item: { id: number; title: string; content: string }) => (
                <WhyUsCard key={item.id} item={item} />
              )
            )}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
