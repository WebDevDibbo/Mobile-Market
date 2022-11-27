import React from 'react';
import { Link } from 'react-router-dom';

const Mobiles = ({phones,setService}) => {
    const {name,image,location,ResalePrice,OriginalPrice,used,postDate,SellersName} = phones;
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
              <p>Post Date : {postDate}</p>
              <p>Seller's Name : {SellersName}</p>
              <div className="card-actions justify-end">
                 <label htmlFor="booking-modal" onClick={()=>setService(phones)} className="btn btn-outline btn-info rounded-lg px-4">Book Now</label>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Mobiles;