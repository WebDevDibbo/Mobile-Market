import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmModal from '../../shared/ConfirmModal/ConfirmModal';

const MyProducts = () => {
    const [deletingProduct,setDeletingProduct] = useState(null)
    

    const {data : products, refetch} = useQuery({
        queryKey:['products'],
        queryFn:async()=>{
          
            try{
                const res = await fetch('http://localhost:5000/products')
                const data = res.json()
                return data
            }
            catch(error){

            }
          
        }
    })

    const closeModal = () =>{
        setDeletingProduct(null)
     }
     const handleDeleteDoctor = product => {
        console.log(product)
        fetch(`http://localhost:5000/products/${product._id}`,{
            method: 'DELETE',   
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount){

                refetch();
               toast.success(`${product.name} deleted successfully`)
            }
        })

     }





    return (
        <div>
            <h2 className='text-3xl mb-4'>My Products</h2>

            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Product</th>
        <th>Category</th>
        <th>Price</th>
        {/* <th>Status</th> */}
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {products &&
        products.map((product,i) => <tr key={product._id}>
            <th>{i+1}</th>
            <td>{product.name}</td>
            <td>{product.categoryName}</td>
            <td>{product.ResalePrice}</td>
            {/* <td></td> */}
            <td>
                
            <label onClick={()=>setDeletingProduct(product)} htmlFor="confirm-modal" className="btn btn-xs btn-error">Delete</label>
                </td>

            <td><button className='btn-xs btn btn-primary'>Advertise</button></td>
          </tr>)
      }
    
    </tbody>
  </table>
           </div>
           {
            deletingProduct && <ConfirmModal
            title={`Are you sure you want to delete`}
            message={`If you delete ${deletingProduct.name}. It cannot be undone.`}
            closeModal = {closeModal}
            successAction = {handleDeleteDoctor}
            modalData = {deletingProduct}
            ></ConfirmModal>
           }
        </div>
    );
};

export default MyProducts;