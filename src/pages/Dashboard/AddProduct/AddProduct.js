import React from 'react';
import { Link } from 'react-router-dom';

const AddProduct = () => {


    const handleAddProduct = (event) =>{

        event.preventDefault();
    }


    return (
        <div className='w-96 mb-10 border border-gray-300 bg-gray-300 px-8 rounded-lg py-8'>
            <h2 className='text-3xl mb-4'>Add Product</h2>
         <form onSubmit={handleAddProduct}>
             <div className="form-control ">
            <label className="label"><span className="label-text">Name</span></label>
            <input type="text" name='name' className="input input-bordered" />
           
          </div>
          <div className="form-control ">
            <label className="label"><span className="label-text">Product Category</span></label>
            <input type="text" name='category' className="input input-bordered mb-4"/>
            <input type="text" name='price' placeholder='price' className="input input-bordered  mb-4" />
            <input type="text" name='condition' placeholder='condition' className="input input-bordered  mb-4" />
            <input type="text" name='number' placeholder='Phone number' className="input input-bordered  mb-4" />
            <input type="text" name='location' placeholder='location' className="input input-bordered  mb-4" />
            <input type="text" name='years' placeholder='Years of Purchase' className="input input-bordered  mb-4" />
            

            <textarea name='description' className="textarea textarea-bordered" placeholder="Product description"></textarea>
           

          </div>
          
          <Link to='/dashboard/myproducts'><input type="submit" className="btn btn-active w-full text-white mt-5" value='Add Product'/></Link>
          
        </form>
            
        </div>
    );
};

export default AddProduct;