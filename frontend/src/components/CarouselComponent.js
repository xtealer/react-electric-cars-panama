import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarouselComponent = ({ images }) => {

  const slides = images.map(img => {
    return (
      <Carousel.Item className="w-100" key={img.file}>
        <img
          className="d-block"
          src={img.file}
          alt={img.alt}
          height={'auto'}
          width={'100%'}
        />
      </Carousel.Item>
    );
  });

  return (
    <Carousel className="w-100" fade interval={3000}>
      {slides}
    </Carousel>
  );
};

export default CarouselComponent;
