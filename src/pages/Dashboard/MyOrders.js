import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const MyOrders = () => {
    const {user} = useContext(AuthContext);
   const url = `http://localhost:5000/bookings?email=${user?.email}`;
   const {data : bookings = []}  = useQuery({
    queryKey:['bookings',user?.email],
    queryFn:async()=>{
        const res = await fetch(url)
        const data = res.json();
        return data;
    }
   })

    return (
        <div>
            <h2 className='text-4xl mb-10'>My Orders</h2>
            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Mobile</th>
       <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {
        bookings.map((booking,i) =>  <tr key={booking._id}>
        <th>
          {i+1}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              {/* <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div> */}
            </div>
            <div>
              <div className="font-bold">{booking.Buyers}</div>
            </div>
          </div>
        </td>
        <td>
          {booking.Mobile}
    
        </td>
        <td>${booking.price}</td>
        <td>
          {booking.price && !booking.paid &&  <Link to = {`/dashboard/payment/${booking._id}`}><button className="btn btn-primary btn-sm ">Pay</button></Link>}
          {booking.price && booking.paid && <span className="text-green-500 ">Paid</span>}
        </td>
      </tr>
           
           
           )
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;

<div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
    <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      
      
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>