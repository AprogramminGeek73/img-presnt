import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import { useState, useEffect } from 'react';
import Image from "next/image";

const images = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
  '/images/4.jpg',
  '/images/5.jpg'
];

export default function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    useEffect(() => {
        let interval;
    
        if (isAutoPlay) {
          interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          }, 3000); // Change image every 3 seconds
        } else {
          clearInterval(interval); // Clear the interval when autoplay is disabled
        }
    
        // Clean up interval on component unmount
        return () => clearInterval(interval);
      }, [isAutoPlay]);
    
    
      const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
    
      const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      };
    
      const toggleAutoPlay = () => {
        setIsAutoPlay((prevState) => !prevState); // Toggle the autoplay state
      };

      const toggleFullScreen = () => {
        setIsFullScreen((prevState) => !prevState); // Toggle full-screen state
      };

    return (
        <div className="relative w-screen-xl mx-auto overflow-hidden w-full h-full ">
        {/* Previous Button */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 cursor-pointer text-2xl z-10"
          onClick={goToPrevious}
        >
          &#10094;
        </button>
  
        {/* Image Slider */}
        
        <div className="flex justify-center items-center w-full h-full ">
          <Image
            className='rounded-lg'
            width={800}
            height={1000}
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

        {/* AutoPlay Toggle Button */}
      <button
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white p-3 rounded-lg z-10"
        onClick={toggleAutoPlay}
      >
        {isAutoPlay ? 'Stop AutoPlay' : 'Start AutoPlay'}
      </button>

      {isFullScreen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-20 flex justify-center items-center">
          <div className="relative">
            <img
              className="max-w-full max-h-full object-contain"
              src={images[currentIndex]}
              alt={`image ${currentIndex + 1}`}
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full"
              onClick={toggleFullScreen}
            >
              &#10005;
            </button>
          </div>
        </div>
      )}

      </div>
    );
  }