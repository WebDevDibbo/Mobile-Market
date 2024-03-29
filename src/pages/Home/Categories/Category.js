import React from 'react';
import { Link } from 'react-router-dom';


const Category = ({category}) => {
    const {name,img,_id} = category;
   
   
    return (
        
           <div className="card w-80 mx-auto bg-base-100 shadow-xl rounded-lg border border-gray-300">
            <figure><img className='rounded-lg' src={img} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p>Buy your favourite phone with best price</p>
              <div className="card-actions justify-end">
                <Link to={`/products/${name}`}><button className="btn btn-outline btn-info">View All</button></Link>
              </div>
            </div>
          </div>
            
        
    );
};

export default Category;