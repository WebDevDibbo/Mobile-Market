import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../shared/Loading/Loading';

const AddProduct = () => {
  const {user}  = useContext(AuthContext)
  const navigate = useNavigate();
  const {register,handleSubmit,formState: { errors }, } = useForm("");
  const imageHostKey = process.env.REACT_APP_IMGBB_KEY;
  const date = new Date();

   const {data : categories,isLoading} = useQuery({
    queryKey:['category'],
    queryFn:async()=>{
      const res = await fetch('https://unused-products-server.vercel.app/categoriesname');
      const data = res.json();
      return data;
    }
   })
   if(isLoading){
    return <Loading></Loading>
   }
   
    
    
   const handleAddProduct = (data) => {
   
     const image = data.image[0];
    const formData = new FormData();
    formData.append("image",image)

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey} `
    fetch(url,{
      method: 'POST',
      body:formData
    })
    .then(res => res.json())
    .then(imgdata => {
      if(imgdata.success){
        console.log(imgdata.data.url)
        const product = {
          name: data.name,
          categoryName : data.category,
          OriginalPrice: data.purchase,
          ResalePrice : data.sale,
          usedofyear : data.year,
          condition : data.condition,
          number:data.number,
          location:data.location,
          description:data.description,
          image:imgdata.data.url,
          postDate: date ,
          sellersEmail: user.email,
          sellersName: user.displayName

        }
        console.log(product)
        fetch('https://unused-products-server.vercel.app/products',{
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body:JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.acknowledged){
            toast.success(`${product.name} is added successfully`)
            navigate('/dashboard/myproducts')
          }
        })
      }
    })

   }

    


    return (
        <div className='mb-10 border border-gray-300 px-8 rounded-md py-8'>
            <h2 className='text-3xl mb-4 text-center'>Add Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
        <div className="form-control">
          
          <input
            type="text" placeholder='Product Name'
            {...register("name", { required: "name is required" })}
            className="input input-bordered rounded-md"
          />
        </div>

        <div className="form-control mb-4">
        <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select className="select select-bordered rounded-md"
          {
            ...register("category")
          }
          >
            {
               categories.map(category=>  <option
                     key={category._id}
                     value={category.name}
                     >
                        {category.name}
                     </option>)
            }
           
          </select>
        </div>
        
        <div className='form-control '>

        <div className='grid grid-cols-2'>
        <input
            type="text" placeholder='Purchase Amount'
            {...register("purchase", { required: "purchase is required" })}
            className="input input-bordered mr-2 rounded-md"
          />
        
        <input
            type="text" placeholder='Sales Amount'
            {...register("sale", { required: "sale is required" })}
            className="input input-bordered rounded-md"
          />
        </div>

        <div className='form-control mt-2'>
        <label className="label">
            <span className="label-text">Condition</span>
          </label>

         <select className="select select-bordered rounded-md"
          {
            ...register("condition",{required: "condition is required"})
          }
          >
            <option>Excellent</option>
            <option>Good</option>
            <option>Fair</option>
           
          </select>
        </div>
        <div className='grid grid-cols-2 mt-3'>
        <input
            type="text" placeholder='Mobile Number'
            {...register("number", { required: "number is required" })}
            className="input input-bordered mr-2 rounded-md"
          />
        <input
            type="text" placeholder='location'
            {...register("location", { required: "location is required" })}
            className="input input-bordered rounded-md"
          />
        </div>
        <div className='mt-3 form-control'>
       
        <input
            type="text" placeholder='Year of purchase'
            {...register("year", { required: "year is required" })}
            className="input input-bordered  rounded-md"
          />
        </div>
        </div>


        
        <div className='border border-gray-300 mt-2 rounded-md'>
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="file"
          {...register("image", { required: "Photo is required" })}
          />

          {errors.image && <p className="text-red-600">{errors.image.message}</p>}
        </div>
        <textarea
        type='text'
           {...register("description", { required: "description is required" })}
          className="textarea textarea-bordered mt-2 w-full rounded-md" placeholder="Description"></textarea>

        <input
          type="submit"
          className="btn btn-primary w-full text-white mt-5 rounded-md"
          value="Add Product"
        />
        <div>
          
        </div>
        
      </form>
            
        </div>
    );
};

export default AddProduct;