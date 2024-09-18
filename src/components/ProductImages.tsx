"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductImagesProps {
  images: string[];
}

const ProductImages: React.FC<ProductImagesProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center"> 
      <div className="relative w-full h-96">
        <img
          alt={`Producto vista ${currentImageIndex + 1}`}
          className="w-full h-full object-contain rounded-lg"
          src={images[currentImageIndex]}
        />
        <Button
          variant="ghost"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 rounded-full p-2"
          onClick={handlePrev}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <Button
          variant="ghost"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 rounded-full p-2"
          onClick={handleNext}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      <div className="flex space-x-2 mt-3">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${currentImageIndex === index ? 'bg-black' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
