import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import c1 from '../../../Utils/carousel_img/c_1.jpg'
import c2 from '../../../Utils/carousel_img/c-2.jpg'
import c3 from '../../../Utils/carousel_img/c-3.jpg'


const items = [
  {
    src: c1,
    altText: 'Iphone unpack',
    // caption: 'Slide 1'
  },
  {
    src: c2,
    altText: 'Iphone unpack',
    // caption: 'Slide 2'
  },
  {
    src: c3,
    altText: 'Iphone unpack',
    // caption: 'Slide 3'
  }
];

const PhotoCar = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        // className="custom-tag"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="custom-tag" />
        {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
      </CarouselItem>
    );
  });

  return (
    <div>     
    <style>
    {
      `.custom-tag {
          margin-top: 4vh;
          max-width: 100%;
          {/* height: 500px; */}
        }`
    }
  </style>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    </div>
  );
  
}

export default PhotoCar;