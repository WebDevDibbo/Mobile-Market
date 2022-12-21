import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const {logIn,googleLogin} = useContext(AuthContext);
  const { register,formState:{errors}, handleSubmit } = useForm();
  const [loginError,setLoginError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const googleProvider = new GoogleAuthProvider();

  const from = location.state?.from?.pathName || '/';
  
  const handleLogin = data => {
    setLoginError('');
     console.log(data);
     logIn(data.email,data.password)
     .then(result => {
      const user = result.user;
      console.log(user)
      navigate(from, { replace: true });

     })
     .catch(err => {
      console.log(err.message)
      setLoginError(err.message)
    })
      
  }
  const handleGoogleLogin = () =>{
      googleLogin(googleProvider)
      .then(result =>{
        const user = result.user;
        console.log(user)
      })
      .catch(err => console.error(err.message))
  }
  return (
    <div className="h-[800px] flex justify-center items-center bg-gray-200">
      <div className="w-96 px-7 rounded-lg shadow-2xl ">
        <h2 className="text-xl text-center my-6">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Email</span></label>
            <input type="email" className="input input-bordered" {...register("email",{required:"Email Address is required"})}/>
            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
         </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Password</span></label>
            <input type="password" className="input input-bordered w-full max-w-xs"
             {...register("password",{required:"Password is required",
              minLength:{value:6,message:"Password must be at least 6 characters or longer"}
              })}/>

            <label className="label"><span className="label-text">Forgot Password?</span></label>
            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}

          </div>
          
          <input type="submit" className="btn btn-active btn-success w-full text-white mt-5" value='login'/>
          <div>
            {loginError && <p className='text-red-600'>{loginError}</p>}
          </div>
        </form>
        <p className="my-4">New to Mobile Market? <Link to='/signup' className="text-secondary">Create new account</Link></p>
        <div className="text-center mb-4 divider">OR</div>
        <input onClick={handleGoogleLogin} type="submit" className="btn btn-outline btn-info mb-6 w-full" value='CONTINUE WITH GOOGLE'/>
      </div>
    </div>
  );
};

export default Login;
