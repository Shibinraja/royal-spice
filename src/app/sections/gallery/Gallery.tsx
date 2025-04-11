"use client";
import { GalleryItem } from "@/app/components/gallery-item/GalleryItem";
import Preloader from "@/app/components/preloader/PreLoader";
import SectionTitle from "@/app/components/section-title/SectionTitle";
import { gallery } from "@/app/data/data";

type GalleryItemType = {
  id: number;
  image: string;
};

const Gallery = () => {
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
          {!gallery ? (
            <Preloader />
          ) : gallery.length > 0 ? (
            gallery.map((image: GalleryItemType) => (
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
