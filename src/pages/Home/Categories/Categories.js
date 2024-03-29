import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from './Category';
import { Link } from 'react-router-dom';

const Categories = () => {
    const {data: categories = []} = useQuery({
        queryKey:['category'],
        queryFn:async() => {
            const res = await fetch('https://unused-products-server.vercel.app/categories')
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='mb-32'>
            <h2 className='text-4xl text-center font-semibold mb-14'>Categories</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6'>
                {
                  categories.slice(0,3).map(category => <Category key={category._id}
                  category= {category}
                  ></Category>)
                }
            </div>
            <div className='text-center'>
            <button><Link to='/allcategories' className='shop-btn  font-semibold'>View All</Link></button>
            </div>
        </div>
    );
};

export default Categories;