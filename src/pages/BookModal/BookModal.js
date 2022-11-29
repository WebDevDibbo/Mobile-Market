import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const BookModal = ({service,setService}) => {
    const {user} = useContext(AuthContext);
    const {name,ResalePrice,_id} = service;

    const handleBooking = event =>{
      event.preventDefault();
      const form = event.target;
      const mobileName = form.mobileName.value ;
      const buyersName = form.buyersName.value;
      const email = form.email.value;
      const price = form.price.value;
      const phone = form.phone.value;
      const location = form.location.value;
      console.log(mobileName,buyersName,email,price,phone,location)
      const booking = {
        Mobile : mobileName,
        Buyers : buyersName,
        email,
        price,
        phone,
        location,
        productId : _id
      }

      fetch('http://localhost:5000/bookings',{
        method:'POST',
        headers:{'content-type': 'application/json'},
        body:JSON.stringify(booking)
      })
      .then(res => res.json())
      .then(data => {
        if(data.acknowledged){
          setService(null);
          toast.success('Booking Confirmed');
        }
      })
      
    }

    return (
        <>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />

         <div className="modal">
           <div className="modal-box relative">
             <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
             <h3 className="text-lg font-bold">{name}</h3>
             <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
             <input type="text" name='mobileName'  disabled  defaultValue = {name} className="input input-bordered " />
             <input type="text" name='buyersName' disabled defaultValue={user?.displayName} className="input input-bordered " />
             <input type="text" name='email' disabled defaultValue = {user?.email} className="input input-bordered " />
             <input type="text" name='price' disabled value = {ResalePrice} className="input input-bordered " />
             <input type="text" name='phone' placeholder='your phone number' className="input input-bordered " />
             <input type="text" name ='location'placeholder = 'location' className="input input-bordered " />
             <input type="Submit" value='Submit' className=' btn btn-accent' />

             </form>
           </div>
         </div>
        </>
    );
};

export default BookModal;