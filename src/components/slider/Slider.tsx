import React, { useState } from 'react';
import { sliderData } from '../../data';
import vetrang from '../../assets/img/slider/Vetrang.png';
import cainhiep from '../../assets/img/slider/cainhiep.jpeg';

const Slider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const chunkArray = (myArray: { image: string }[], chunk_size: number) => {
    let index = 0;
    const arrayLength = myArray.length;
    const tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
      const myChunk = myArray.slice(index, index + chunk_size);
      tempArray.push(myChunk);
    }

    return tempArray;
  };

  const result = chunkArray(sliderData, 6);
  const length = result.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  if (!Array.isArray(result) || result.length <= 0) {
    return null;
  }

  setTimeout(nextSlide, 7000);
  return (
    <div className="slider">
      <div className="container">
        <div className="slider__content">
          <button type="button" className="arrow arrow__prev" onClick={prevSlide}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button type="button" className="arrow arrow__next" onClick={nextSlide}>
            <i className="fas fa-chevron-right"></i>
          </button>
          <div className="slider__list">
            {result.map((slide, index) => {
              return (
                <div
                  key={index}
                  className={index === current ? 'slider__item active' : 'slider__item'}
                >
                  {index === current && (
                    <div>
                      <div className="slide">
                        <div className="slide__images">
                          <div className="slide__item left">
                            <div className="image__content">
                              <img
                                alt="slider"
                                className="slider__image img1"
                                src={slide[0].image}
                              />
                            </div>
                            <div className="image__content">
                              <img
                                alt="slider"
                                className="slider__image img2"
                                src={slide[1].image}
                              />
                            </div>
                            <div className="image__content">
                              <img
                                alt="slider"
                                className="slider__image img3"
                                src={slide[2].image}
                              />
                            </div>
                          </div>
                          <img src={vetrang} className="logo__banner bn-right" alt="img" />
                        </div>
                      </div>
                      <div className="slide">
                        <div className="slide__images">
                          <img src={cainhiep} className="logo__banner bn-left" alt="img" />
                          <div className="slide__item right">
                            <div className="image__content">
                              <img
                                alt="slider"
                                className="slider__image img4"
                                src={slide[3].image}
                              />
                            </div>
                            <div className="image__content">
                              <img
                                alt="slider"
                                className="slider__image img5"
                                src={slide[4].image}
                              />
                            </div>
                            <div className="image__content">
                              <img
                                alt="slider"
                                className="slider__image img6"
                                src={slide[5].image}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
