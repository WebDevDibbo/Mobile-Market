import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import bggradient from '../../assets/bg-gradient.jpg'

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
    <div style={{backgroundImage : `url(${bggradient})`}}
    className="h-[600px] flex justify-center items-start">
      <div className="w-96 bg-white px-7 mt-12 rounded-lg shadow-2xl ">
        <h2 className="text-xl text-center font-semibold my-6">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text font-semibold">Email</span></label>
            <input type="email" className="p-2  border border-slate-400 shadow-lg focus:border-slate-300" {...register("email",{required:"Email Address is required"})}/>
            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
         </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text font-semibold">Password</span></label>
            <input type="password" className="p-2 border border-slate-400 shadow-lg focus:border-slate-300"
             {...register("password",{required:"Password is required",
              minLength:{value:6,message:"Password must be at least 6 characters or longer"}
              })}/>

            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}

          </div>
          
          <input type="submit" className="py-2 cursor-pointer text-base font-semibold w-full bg-gradient-to-r from-sky-500 to-indigo-500 border-none text-white mt-5" value='Login'/>
          <div>
            {loginError && <p className='text-red-600'>{loginError}</p>}
          </div>
        </form>
        <p className="my-4">New to Mobile Market? <Link to='/signup' className="text-primary">Create new account</Link></p>
        <div className="text-center mb-4 divider">OR</div>
        <input onClick={handleGoogleLogin} type="submit" className="border border-black py-2 cursor-pointer bg-gradient-to-r text-white border-none from-sky-500 to-purple-500 font-semibold mb-6 w-full" value='Continue With Google'/>
      </div>
    </div>
  );
};

export default Login;
