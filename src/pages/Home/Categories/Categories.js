import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from './Category';

const Categories = () => {
    const {data: categories = []} = useQuery({
        queryKey:['category'],
        queryFn:async() => {
            const res = await fetch('http://localhost:5000/categories')
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='mb-32'>
            <h2 className='text-4xl text-center mb-14'>Categories</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                  categories.map(category => <Category key={category._id}
                  category= {category}
                  ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;