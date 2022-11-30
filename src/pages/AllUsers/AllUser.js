import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUser = () => {

    const {data : users = [],refetch} = useQuery({
        queryKey:['users'],
        queryFn:async() => {
            const res = await fetch('https://unused-products-server.vercel.app/users')
            const data = await res.json();
            return data
        }
    })


    const handleVerify = email => {
      fetch(`https://unused-products-server.vercel.app/user/verify?email=${email}`,{
        method : "PUT",

      })
      .then(res => res.json())
      .then(data => {
        if(data.acknowledged){
          toast.success()
          refetch();
        }
        
      })
    }
    const handleDelete = id => {
     
    }


    return (
        <div>
            <h2 className='text-3xl mb-10 text-center'>All Users</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>isVerified</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user,i)=> <tr key={user._id}>
            <th>{i+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>{user?.isVerify ? <span className='badge'>verified</span> :  <button onClick={()=>handleVerify(user.email)} className='btn btn-primary btn-sm'>Verify</button>}</td>
            <td><button onClick={()=>handleDelete(user._id)} className='btn btn-xs btn-accent'>Delete</button></td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUser;