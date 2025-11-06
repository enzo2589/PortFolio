import { useState, useEffect } from "react";
import "../style/MediaSlider.css";

import Img1 from "../img/image1.jpeg";
import Img2 from "../img/image2.jpeg";
import Img3 from "../img/image3.jpeg";
import Img4 from "../img/image4.jpeg";


export default function MediaSlider() {
  const images = [Img1, Img2, Img3, Img4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider-container">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={index === currentIndex ? "active" : ""}
        />
      ))}
    </div>
  );
}

