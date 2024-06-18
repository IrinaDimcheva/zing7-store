'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { brands } from '@/data/data';
import Image from 'next/image';

export default function Brands() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <section className="max-w-screen-fit mx-auto">
      <div>
        <Slider {...settings}>
          {brands.map(({ name, logo }) => (
            <div key={name}>
              <Image src={logo} alt={name} width={120} height={120} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
