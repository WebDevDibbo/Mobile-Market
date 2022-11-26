import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(result =>{})
    .catch(err => console.error(err))
  }

    const menuItems = (
        <React.Fragment>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/appointment">Categories</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          
        </React.Fragment>
      );
  return (
    // sticky top-0 z-10
    <div className="navbar  bg-base-100 my-5">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={1}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          {menuItems}
        </ul>
      </div>
      <Link to="/" className="btn btn-ghost normal-case text-xl">
        Mobile Market
      </Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal">{menuItems}</ul>
    </div>
    <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
    <div className="navbar-end">
    {
      user?.uid ?
      <Link onClick={handleLogOut} ><button className="btn btn-outline btn-success px-5 rounded-md">LogOut</button></Link>

      :

     <>
      <Link to='/login'><button className="btn btn-outline btn-success px-5 mr-4 rounded-md">LogIn</button></Link>
      <Link to='/signup'><button className="btn btn-outline btn-success rounded-md">Sign Up</button></Link>
     </>
    }
    </div>
  </div>
  );
};

export default Navbar;
