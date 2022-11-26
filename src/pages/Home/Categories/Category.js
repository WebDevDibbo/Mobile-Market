// import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
// import PhonesCollection from './PhonesCollection';

const Category = ({category}) => {
    const {name,img,_id} = category;
    
 
    
   
    return (
        <div>
           <div className="card w-96 mx-auto bg-base-100 shadow-xl rounded-lg border border-gray-300">
            <figure><img className='rounded-lg' src={img} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p>Buy your favourite phone with best price</p>
              <div className="card-actions justify-end">
                <Link to={`/products/${name}`}><button className="btn btn-outline btn-info">View All</button></Link>
              </div>
            </div>
          </div>
            
        </div>
    );
};

export default Category;