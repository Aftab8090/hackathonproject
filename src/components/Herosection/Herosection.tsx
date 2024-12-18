import React from 'react';
import Image from 'next/image';
import hero from "../../../public/hero.jpeg"

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={hero}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <p className="text-sm md:text-lg uppercase tracking-wide mb-4">Welcome to Our Website</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover the World with Us</h1>
        <p className="text-base md:text-lg max-w-xl mb-8">
          Explore amazing places, experience new adventures, and create unforgettable memories with our curated travel packages.
        </p>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg rounded shadow-md">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
