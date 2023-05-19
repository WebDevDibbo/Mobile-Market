import React from 'react';
import Lottie from "lottie-react";
import Mobile from '../../../Mobile.json'
import './Banner.css'
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className='flex md:flex-row flex-col justify-around items-center mb-24 mt-5'>
        <div>
          <h1 className='md:text-6xl text-3xl mb-8 text-black max-w-lg font-semibold'>A New <span className='text-[#FF5567]'>Online Shop</span> experience</h1>
          <p className='text-slate-500 font-medium max-w-lg text-xl'>Here you can sell your old products and also buy others used products</p>
          <button className='mt-6'><Link to='/allcategories' className='shop-btn font-semibold'>Shop Now</Link></button>
        </div>
        <div className="w-full  lg:w-1/3 ">
        <Lottie classID="md:w-1/3" animationData={Mobile} loop={true} />
        </div>
        
        </div>
    );
};

export default Banner;