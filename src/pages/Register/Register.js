import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
  const {createUser,googleLogin,updateUser}  = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const handleGoogleSignUp = () =>{
    googleLogin(googleProvider)
    .then(result => {const user = result.user 
    console.log(user)
    })
    .catch(err => {console.log(err)});
  }



  const handleSignUp = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const role = form.role.value;
    console.log(name, email, password,role);
    createUser(email,password)
    .then(result =>{
      const user = result.user;
      console.log(user) ;
      form.reset();
      toast.success('User Created Successfully');
     
      const userInfo = {
        displayName : name
      }
      updateUser(userInfo)
      .then(() =>{
        saveuser(name,email,role);
        
      })
      .catch(err => console.log(err))
    })
    .catch(err => console.error(err));

    const saveuser = (name,email,role)=>{
      const user = {name,email,role};
      fetch('https://unused-products-server.vercel.app/users',{
       method: 'POST',
       headers:{'content-type' : 'application/json'},
       body:JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
        console.log("saveuser",data)
        navigate('/')
      })
    }




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
            <input type="text" name='name' required  className="input input-bordered" />
           
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name='email' required className="input input-bordered" />
            
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' required className="input input-bordered" />
            
          </div>
          <select name='role'  className="select select-bordered mt-4 w-full max-w-xs">
              <option>Seller</option>
              <option>Buyer</option>
         </select>
          <input
            type="submit"
            className="btn btn-outline btn-primary w-full text-white mt-5"
            value="signup"
          />
          <div>
           
          </div>
        </form>
        <p className="my-4">
          Already have an Account?{" "}
          <Link to="/login" className="text-secondary">
            Please Login
          </Link>
        </p>
        <div className="text-center mb-4 divider">OR</div>
        <input
          type="submit" onClick={handleGoogleSignUp}
          className="btn btn-outline btn-success mb-6 w-full"
          value="CONTINUE WITH GOOGLE"
        />
      </div>
    </div>
        </div>
    );
};

export default Register;