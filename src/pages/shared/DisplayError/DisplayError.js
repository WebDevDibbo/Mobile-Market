import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import imgerror from  '../../../assets/404-error.jpg'

const DisplayError = () => {
    const {logOut} = useContext(AuthContext);
    const navigate = useNavigate();
    const error = useRouteError();
    const handleLogOut = () => {
        logOut()
          .then(()=>{
           navigate('/login')
          })
          .catch((error) => console.error(error));
      };
    return (
        <div>
           <h4 className='text-3xl mt-4'>Please <button className='btn btn-primary' onClick={handleLogOut}>sign Out</button> and log back in</h4>
            <img className='md:w-3/4 mx-auto' src={imgerror} alt="" />
        </div>
    );
};

export default DisplayError;