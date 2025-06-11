"use client";
import Image from "next/image";
import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Download from "yet-another-react-lightbox/plugins/download";

const galleryImages = [
  { id: 1, src: "/gallery/1.jpg", alt: "Gallery image 1" },
  { id: 2, src: "/gallery/2.jpg", alt: "Gallery image 2" },
  { id: 3, src: "/gallery/3.jpg", alt: "Gallery image 3" },
  { id: 4, src: "/gallery/4.jpg", alt: "Gallery image 4" },
  { id: 5, src: "/gallery/5.jpg", alt: "Gallery image 5" },
  { id: 6, src: "/gallery/6.jpg", alt: "Gallery image 6" },
  { id: 7, src: "/gallery/7.jpg", alt: "Gallery image 7" },
  { id: 8, src: "/gallery/8.jpg", alt: "Gallery image 8" },
  { id: 9, src: "/gallery/9.jpg", alt: "Gallery image 9" },
];

export default function ImageSection() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((item, index) => (
              <div key={item.id} className="h-64 flex items-center justify-center">
                <Image
                  src={item.src}
                  alt={item.alt}
                  className="object-cover h-full w-full rounded-md cursor-pointer"
                  height={"256"}
                  width={"256"}
                  onClick={() => handleOpen(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={galleryImages.map((img) => ({ src: img.src, alt: img.alt }))}
        index={currentIndex}
        plugins={[Thumbnails, Fullscreen, Slideshow, Download]}
      />
    </>
  );
}
