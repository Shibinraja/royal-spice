import React, { useEffect } from "react";
import Glightbox from "glightbox";
import "./galleryItem.css";
import Image from "next/image";

export const GalleryItem = ({
  item,
}: {
  item: {
    id: number;
    image: string;
  };
}) => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new (Glightbox as any)({
      selector: ".gallery-lightbox",
    });
  }, []);

  return (
    <div className="col-lg-3 col-md-4">
      <div className="gallery-item">
        <a
          href={item.image}
          className="gallery-lightbox"
          data-gall="gallery-item"
        >
          <Image
            width={500}
            height={300}
            style={{
              width: "100%",
              height: "350px",
            }}
            src={item.image}
            alt=""
            className="img-fluid"
          />
        </a>
      </div>
    </div>
  );
};
