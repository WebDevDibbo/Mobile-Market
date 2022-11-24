import React from 'react';
import iphone from '../../../assets/iphone14.jpg'
import samsung from '../../../assets/samsungs22.jpg'
import vivo from '../../../assets/vivox80.jpg'

const Featured = () => {
    return (
        <div className='mb-32 mx-auto'>
             <h2 className='text-4xl text-center mb-14'>Featured Phones</h2>
             <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8'>
             <div className='mb-5 shadow-xl rounded-lg  border pb-10 mx-auto'>
                <img className='rounded-lg' src={iphone} alt="" />
                <div className='pl-2 pt-6'>
                <h3 className='text-xl mb-2'>Iphone 14 Pro Max</h3>
                <p className='font-semibold' style={{color:"#9019D1"}}>$2000</p>
                </div>
             </div>
             <div className='mb-5  shadow-xl rounded-lg  border mx-auto'>
                <img className='rounded-lg' src={samsung} alt="" />
                <div className='pl-2 pt-6'>
                <h3 className='text-xl mb-2'>Samsung S22 Ultra</h3>
                <p className='font-semibold' style={{color:"#9019D1"}}>$1500</p>
                </div>
             </div>
             <div className='mb-5  shadow-xl rounded-lg mx-auto'>
                <img className='rounded-lg' src={vivo} alt="" />
                <div className='pl-2 pt-6'>
                <h3 className='text-xl mb-2'>Vivo x80 Pro</h3>
                <p className='font-semibold' style={{color:"#9019D1"}}>$1000</p>
                </div>
             </div>
             </div>
        </div>
    );
};

export default Featured;