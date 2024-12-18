import React from 'react';
import Image from 'next/image';
import cardone from '../../../public/GridCardImages/cardone.jpeg'
import cardtwo from '../../../public/GridCardImages/cardtwo.jpeg'
import cardthree from '../../../public/GridCardImages/cardthree.jpeg'
import cardfour from '../../../public/GridCardImages/cardfour.jpeg'



const GridCardSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Gallery</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Explore our collection of beautiful moments and amazing experiences.
        </p>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Column 1 */}
          <div className="md:col-span-2">
            <Image
              src={cardone}
              alt="Gallery Image 1"
              layout="responsive"
              width={700}
              height={400}
              className="rounded-lg"
            />
          </div>

          {/* Column 2 */}
          <div className="md:col-span-1">
            <Image
              src={cardtwo}
              alt="Gallery Image 2"
              layout="responsive"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>

          {/* Column 3 */}
          <div className="md:col-span-1 grid grid-rows-2 gap-4">
            <Image
              src={cardthree}
              alt="Gallery Image 3"
              layout="responsive"
              width={400}
              height={200}
              className="rounded-lg"
            />
            <Image
              src={cardfour}
              alt="Gallery Image 4"
              layout="responsive"
              width={400}
              height={200}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridCardSection;
