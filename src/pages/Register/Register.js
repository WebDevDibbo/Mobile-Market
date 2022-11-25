import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const handleSignUp = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
  }
    return (
        <div>
            <div className="h-[800px] flex justify-center items-center bg-gray-200">
      <div className="w-96 px-7 rounded-lg shadow-2xl ">
        <h2 className="text-xl text-center my-6">Sign Up</h2>
        <form onSubmit={handleSignUp} >
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name='name'   className="input input-bordered" />
            

          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name='email'  className="input input-bordered" />
            

          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' className="input input-bordered" />
            
          </div>

          <input
            type="submit"
            className="btn btn-outline btn-primary w-full text-white mt-5"
            value="signup"
          />
          <div>
           
          </div>
        </form>
        <p className="my-4">
          Already have an Account??{" "}
          <Link to="/login" className="text-secondary">
            Please Login
          </Link>
        </p>
        <div className="text-center mb-4 divider">OR</div>
        <input
          type="submit"
          className="btn btn-outline btn-success mb-6 w-full"
          value="CONTINUE WITH GOOGLE"
        />
      </div>
    </div>
        </div>
    );
};

export default Register;