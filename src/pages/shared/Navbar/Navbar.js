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
            <Link className="font-semibold transition ease-linear  hover:text-[#FF5A63]" to="/">Home</Link>
          </li>
          <li>
            <Link className="font-semibold  transition ease-linear  hover:text-[#FF5A63]" to="/blog">Blog</Link>
          </li>
          <li>
            <Link className="font-semibold  transition ease-linear  hover:text-[#FF5A63]" to="/allcategories">Categories</Link>
          </li>
          <li>
            <Link className="font-semibold  transition ease-linear  hover:text-[#FF5A63]" to="/contact">Contact</Link>
          </li>
          {
            user?.uid ? 
            <li>
            <Link className="font-semibold  transition ease-linear  hover:text-[#FF5A63]" to="/dashboard">Dashboard</Link>
          </li>
          :
          <></>
          }
          
        </React.Fragment>
      );
  return (
    // sticky top-0 z-10
    <div className="navbar bg-base-100 sticky top-0 z-10 my-5">
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
      {/* <Link to="/" className="btn font-bold btn-ghost normal-case text-2xl"> */}
        <h2 className="normal-case text-2xl font-bold"><span className="text-[#FF5A63]">Star</span>Mobile</h2>
      
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal">{menuItems}</ul>
    </div>
    
    <div className="navbar-end">
    {
      user?.uid ?
      <Link onClick={handleLogOut} ><button className="font-semibold text-base transition ease-linear hover:text-[#FF5567] mr-4">Log Out</button></Link>

      :

     <>
      <Link to='/login'><button className="font-semibold text-base transition ease-linear hover:text-[#FF5567] mr-4">Log In</button></Link>
     </>
    }
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
  </div>
  );
};

export default Navbar;
