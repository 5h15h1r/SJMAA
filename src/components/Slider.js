import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const Sliderr = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        verticalSwiping: true,
      };
    
      const carouselItems = [
        {
          id: 1,
          imageSrc: "/sjmaa1.jpeg",
          caption: 'Caption 1',
        },
        {
          id: 2,
          imageSrc: '/sjmaa2.jpeg',
          caption: 'Caption 2',
        },
        // Add more items as needed
      ];
    
      return (
        <div className=" mx-auto overflow-hidden border-gray-100">
          <Slider {...settings}>
            {carouselItems.map((item) => (
              <div key={item.id} className="relative">
                <Image src={item.imageSrc} alt={`Carousel Item ${item.id}`}  height={500} width={1600} style={{objectFit: "cover"}} className="w-full h-[200px] sm:h-[35n0px] lg:h-[400px] xl:h-[500px]" />
                {/* <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white">
                  {item.caption}
                </div> */}
              </div>
            ))}
          </Slider>
        </div>
      );
    };
export default Sliderr
