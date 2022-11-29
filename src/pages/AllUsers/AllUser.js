import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUser = () => {

    const {data : users = []} = useQuery({
        queryKey:['users'],
        queryFn:async() => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json();
            return data
        }
    })
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