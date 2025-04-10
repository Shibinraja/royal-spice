"use client";
import { GalleryItem } from "@/app/components/gallery-item/GalleryItem";
import Preloader from "@/app/components/preloader/PreLoader";
import SectionTitle from "@/app/components/section-title/SectionTitle";
import React, { useState, useEffect } from "react";

type GalleryItemType = {
  id: number;
  image: string;
};

const Gallery = () => {
  const [images, setImages] = useState<GalleryItemType[] | []>([]);

  const getGalleryData = () => {
    fetch("http://localhost:3000/api/gallery")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((e) => console.error(e.message));
  };

  useEffect(function fetchGalleryData() {
    getGalleryData();
  }, []);

  return (
    <section id="gallery" className="gallery">
      <div className="container" data-aos="fade-up">
        <SectionTitle
          title="Gallery"
          subtitle="Some photos from our Restaurant"
        />
      </div>
      <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-0">
          {!images ? (
            <Preloader />
          ) : images.length > 0 ? (
            images.map((image: GalleryItemType) => (
              <GalleryItem key={image.id} item={image} />
            ))
          ) : (
            <Preloader />
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
