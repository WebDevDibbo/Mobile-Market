import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const BookModal = ({service}) => {
    const {user} = useContext(AuthContext);
    const {name,ResalePrice} = service;

    const handleBooking = event =>{
      event.preventDefault();
    }

    return (
        <>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />

         <div className="modal">
           <div className="modal-box relative">
             <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
             <h3 className="text-lg font-bold">{name}</h3>
             <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
             <input type="text" disabled value = {name} className="input input-bordered " />
             <input type="text" disabled value={user?.displayName} className="input input-bordered " />
             <input type="text" disabled value = {user?.email} className="input input-bordered " />
             <input type="text" disabled value = {ResalePrice} className="input input-bordered " />
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