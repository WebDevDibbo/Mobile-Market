import React, { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const SignUp = () => {
  const {createUser,updateUser,verifyEmail} = useContext(AuthContext);
  const { register,handleSubmit,formState:{errors} } = useForm("");
  const [signUpError,setSignUpError] = useState('');
  const navigate = useNavigate();
  
  const handleSignUp = data => {
    setSignUpError('')
    // signupform
    // const role = data.role;
    // const name = data.name;
    // const email = data.email;
    // const password = data.password;
    // console.log(role,name,email,password)
    
    createUser(data.email,data.password)
    .then(result => {
      const user = result.user;
      console.log(user)
      toast.success('User created Successfully')
      
      // verifyEmail()
      // .then(()=>{
      //   alert('Please check your email and verify email address')
      // })
      const userInfo = {
        displayName:data.name
      }
      updateUser(userInfo)
      .then(()=>{
       saveUser(data.name,data.email,data.role)
       navigate('/')
      })
      .catch(err => console.error(err))
  })
    .catch(err => {
      console.error(err.message)
    setSignUpError(err.message)
    })
  }

  const saveUser = (name,email,role)=>{
    const user = {name,email,role};
    fetch('https://unused-products-server.vercel.app/users',{
      method:'POST',
      headers:{"content-type" : "application/json"},
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      
    })
  }

  // const getUserToken = (email) =>{
  //   fetch(`http://localhost:5000/jwt?email=${email}`)
  //   .then(res => res.json())
  //   .then(data => {
  //     if(data.accessToken){
  //       localStorage.setItem("accessToken",data.accessToken)
  //       navigate('/');
  //     }
  //   })
  // }

  
  return (
    <div className="h-[800px] flex justify-center items-center bg-gray-200">
      <div className="w-96 px-7 rounded-lg shadow-2xl ">
        <h2 className="text-xl text-center my-6">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text"  {...register("name",{required:"name is required"})} className="input input-bordered" />
            {errors.name && <p className="text-red-600">{errors.name.message}</p>}

          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" {...register("email",{required:true})} className="input input-bordered" />
            {errors.email && <p className="text-red-600">{errors.email.message}</p>}

          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" {...register("password",{required:"Password is required",
        minLength:{value:6,message:"Password must be at least 6 characters"},
        pattern:{value:/(?=.*[0-9])/,message:'Password must be numbers'}
        })} className="input input-bordered" />
            {errors.password && <p className="text-red-600">{errors.password.message}</p>}
          </div>
          <select {...register("role",{required:"role is required"})}  className="select select-bordered mt-4 w-full max-w-xs">
              <option>Seller</option>
              <option>Buyer</option>
         </select>

          <input
            type="submit"
            className="btn btn-active btn-success w-full text-white mt-5"
            value="signup"
          />
          <div>
            {signUpError && <p className="text-red-600">{signUpError}</p>}
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
          className="btn btn-outline btn-info mb-6 w-full"
          value="CONTINUE WITH GOOGLE"
        />
      </div>
    </div>
  );
};

export default SignUp;
