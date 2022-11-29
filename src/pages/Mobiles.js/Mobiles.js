import React from 'react';
import { FaCheckCircle } from "react-icons/fa";


const Mobiles = ({phones,setService}) => {
    const {name,image,location,ResalePrice,OriginalPrice,used,postDate, sellersName,description,number,isVerify
    } = phones;
    return (
        <div>
            <div className="card card-compact w-96 mx-auto mb-10 shadow-xl rounded-lg border border-gray-300">
            <figure><img className='rounded-lg' src={image} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Name : {name}</h2>
              <p>Location : {location}</p>
              <p>Original Price : {OriginalPrice}</p>
              <p>Resale Price : {ResalePrice}</p>
              <p>Used : {used}</p>
              <p>Post Date : {postDate.slice(0,10)}</p>
              <p>Number : {number}</p>
              <p className='flex items-center gap-3'>Seller's Name : {sellersName} {isVerify && <span><FaCheckCircle className='text-blue-500'/></span> }</p>
              <p><small>Description : {description}</small></p>
              <div className="card-actions justify-end">
                 <label htmlFor="booking-modal" onClick={()=>setService(phones)} className="btn btn-outline btn-info rounded-lg px-4">Book Now</label>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Mobiles;