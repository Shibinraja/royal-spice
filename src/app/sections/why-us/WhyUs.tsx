import SectionTitle from "@/app/components/section-title/SectionTitle";
import WhyUsCard from "@/app/components/whyus-card/WhyUsCard";
import React from "react";
import './WhyUs.css'

async function getWhyUsData() {
  const res = await fetch("http://localhost:3000/api/whyus");
  return res.json();
}

const WhyUs = async () => {
  const items: [] = await getWhyUsData();
  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <SectionTitle title="why us" subtitle="Why Choose Our Restaurant"/>
        <div className="row">
          {items &&
            items.length > 0 &&
            items.map(
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
