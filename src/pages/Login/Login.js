import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
  const {logIn,googleLogin}  = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = ()=>{
    googleLogin(googleProvider)
    .then(result => {
      const user = result.user;
      console.log(user)
    
    })
    .catch(err => console.error(err))
  } 


  const handleLogin = event => {
     event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)
    logIn(email,password)
    .then(result => {
      const user = result.user;
      console.log(user);
      form.reset();
    })
    .catch(err => console.error(err))
  }
    return (
        <div>
             <div className="h-[800px] flex justify-center items-center bg-gray-200">
      <div className="w-96 px-7 rounded-lg shadow-2xl ">
        <h2 className="text-xl text-center my-6">Login</h2>
        <form onSubmit={handleLogin} >
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Email</span></label>
            <input type="email" name='email' className="input input-bordered" />
           
    </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Password</span></label>
            <input type="password" name='password' className="input input-bordered w-full max-w-xs"
            />

            <label className="label"><span className="label-text">Forgot Password?</span></label>
           

          </div>
          
          <input type="submit" className="btn btn-accent w-full text-white mt-5" value='login'/>
          
        </form>
        <p className="my-4">New to Mobile Market? <Link to='/signup' className="text-primary">Create new account</Link></p>
        <div className="text-center mb-4 divider">OR</div>
        <input  onClick={handleGoogleSignIn} type="submit" className="btn btn-outline btn-success mb-6 w-full" value='CONTINUE WITH GOOGLE'/>
      </div>
    </div>
        </div>
    );
};

export default Login;