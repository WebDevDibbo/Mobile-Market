import React from 'react';
import phone1 from '../../../assets/phone1.jpg'
import phone2 from '../../../assets/phone2.jpg'
import phone3 from '../../../assets/phone3.jpg'
import phone4 from '../../../assets/phone4.jpg'

const Banner = () => {
    return (
        <div>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="slider-img">
              <img src={phone1} className="w-full banner rounded-lg" alt="" />
            </div>
            <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
              <h1 className="md:text-3xl lg:text-4xl font-bold text-white ">
              </h1>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="slider-img">
              <img src={phone2} className="w-full banner rounded-lg" alt="" />
            </div>
            <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
              <h1 className="md:text-3xl lg:text-4xl  font-bold text-white ">
               
              </h1>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className="slider-img">
              <img src={phone3} className="w-full banner rounded-lg" alt="" />
            </div>
            <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
              <h1 className="md:text-3xl lg:text-4xl font-bold text-white ">
                
              </h1>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <div className="slider-img">
              <img src={phone4} className="w-full banner rounded-lg" alt="" />
            </div>
            <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
              <h1 className="md:text-3xl lg:text-4xl font-bold text-white ">
                
              </h1>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;