import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
             <div className="h-[800px] flex justify-center items-center bg-gray-200">
      <div className="w-96 px-7 rounded-lg shadow-2xl ">
        <h2 className="text-xl text-center my-6">Login</h2>
        <form >
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Email</span></label>
            <input type="email" className="input input-bordered" />
           
    </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Password</span></label>
            <input type="password" className="input input-bordered w-full max-w-xs"
            />

            <label className="label"><span className="label-text">Forgot Password?</span></label>
           

          </div>
          
          <input type="submit" className="btn btn-accent w-full text-white mt-5" value='login'/>
          
        </form>
        <p className="my-4">New to Doctors Portal? <Link to='/signup' className="text-secondary">Create new account</Link></p>
        <div className="text-center mb-4 divider">OR</div>
        <input  type="submit" className="btn btn-outline mb-6 w-full" value='CONTINUE WITH GOOGLE'/>
      </div>
    </div>
        </div>
    );
};

export default Login;