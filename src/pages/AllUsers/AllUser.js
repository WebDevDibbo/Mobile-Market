import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUser = () => {

    const {data : users = [],refetch} = useQuery({
        queryKey:['users'],
        queryFn:async() => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json();
            return data
        }
    })


    const handleVerify = email => {
      fetch(`http://localhost:5000/user/verify?email=${email}`,{
        method : "PUT",

      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        refetch();
        
      })
    }


    return (
        <div>
            <h2 className='text-3xl mb-4'>All Users</h2>
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
            <td><button className='btn btn-xs btn-accent'>Delete</button></td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUser;