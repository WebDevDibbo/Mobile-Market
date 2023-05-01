import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import { useDispatch, useSelector } from 'react-redux';
import { BOOK_NOW } from '../../redux/actionTypes/actionTypes';
import { productAction } from '../../redux/actions/productAction';
import { bookProductData } from '../../redux/thunk/products/BookProducts';

const BookModal = ({service,setService}) => {
    const {user} = useContext(AuthContext);
    const {name,ResalePrice,_id} = service;
    const state = useSelector(state => state)
    const dispatch = useDispatch();

    const handleBooking = event =>{
      event.preventDefault();
      // const form = event.target;
      // const mobileName = form.mobileName.value ;
      // const buyersName = form.buyersName.value;
      // const email = form.email.value;
      // const price = form.price.value;
      // const phone = form.phone.value;
      // const location = form.location.value;
      console.log(state)
     
      // console.log(booking);
      dispatch(bookProductData(state))
      
      // const booking = {
      //   Mobile : mobileName,
      //   Buyers : buyersName,
      //   email,
      //   price,
      //   phone,
      //   location,
      //   productId : _id
      // }

      // fetch('https://unused-products-server.vercel.app/bookings',{
      //   method:'POST',
      //   headers:{'content-type': 'application/json'},
      //   body:JSON.stringify(booking)
      // })
      // .then(res => res.json())
      // .then(data => {
      //   if(data.acknowledged){
      //     setService(null);
      //     toast.success('Booking Confirmed');
      //   }
      // })
      
    }

    return (
        <>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />

         <div className="modal">
           <div className="modal-box relative">
             <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
             <h3 className="text-lg font-bold">{name}</h3>
             <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
             <input type="text" name='mobileName' onBlur={e => dispatch(productAction(e))} className="input input-bordered" placeholder='Mobile Name' required/>
             <input type="text" name='buyersName' onBlur={e => dispatch(productAction(e))}    className="input input-bordered" placeholder="Name" required/>
             <input type="text" name='email' onBlur={e => dispatch(productAction(e))}   className="input input-bordered" placeholder='email' required/>
             <input type="text" name='price' onBlur={e => dispatch(productAction(e))} className="input input-bordered " placeholder='resell price' required/>
             <input type="text" name='phone' onBlur={e => dispatch(productAction(e))}  placeholder='your phone number' className="input input-bordered" required/>
             <input type="text" name ='location' onBlur={e => dispatch(productAction(e))} placeholder = 'location' className="input input-bordered" required/>
             <input type="Submit" value='Submit' className=' btn btn-accent' />

             </form>
           </div>
         </div>
        </>
    );
};

export default BookModal;