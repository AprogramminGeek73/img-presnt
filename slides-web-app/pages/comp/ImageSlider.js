import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import { useState } from 'react';
const images = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
  '/images/4.jpg',
  '/images/5.jpg'
];

export default function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const goToPrevious = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }

    return (
        <div className="relative max-w-screen-xl mx-auto overflow-hidden">
        {/* Previous Button */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 cursor-pointer text-2xl z-10"
          onClick={goToPrevious}
        >
          &#10094;
        </button>
  
        {/* Image Slider */}
        <div className="flex justify-center items-center w-full">
          <img
            className="w-full h-auto rounded-lg"
            src={images[currentIndex]}
            alt={`image ${currentIndex + 1}`}
          />
        </div>
  
        {/* Next Button */}
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 cursor-pointer text-2xl z-10"
          onClick={goToNext}
        >
          &#10095;
        </button>
      </div>
    );
  }