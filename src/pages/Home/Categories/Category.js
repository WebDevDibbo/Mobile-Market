import React from 'react';

const Category = ({category}) => {
    const {_id,name,img} = category;
    return (
        <div>
           <div className="card card-compact w-96 mx-auto bg-base-100 shadow-xl rounded-lg border border-gray-300">
            <figure><img className='rounded-lg' src={img} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p>Buy your favourite phone with best price</p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-info">View All</button>
              </div>
            </div>
          </div>
            
        </div>
    );
};

export default Category;