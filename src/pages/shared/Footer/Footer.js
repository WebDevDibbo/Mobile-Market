import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
 
  <div >
     <footer className="footer shadow-none bg-slate-400 p-10 text-base-content">
  <div>
    <span className="footer-title text-[#FF5A63]">Services</span> 
    <Link className="link link-hover">Branding</Link> 
    <Link className="link link-hover">Design</Link> 
    <Link className="link link-hover">Marketing</Link> 
    <Link className="link link-hover">Advertisement</Link>
  </div> 
  <div>
    <span className="footer-title text-[#FF5A63]">Company</span> 
    <Link className="link link-hover">About us</Link> 
    <Link className="link link-hover">Contact</Link> 
    <Link className="link link-hover">Jobs</Link> 
    <Link className="link link-hover">Press kit</Link>
  </div> 
  <div>
    <span className="footer-title text-[#FF5A63]">Legal</span> 
    <Link className="link link-hover">Terms of use</Link> 
    <Link className="link link-hover">Privacy policy</Link> 
    <Link className="link link-hover">Cookie policy</Link>
  </div> 
  <div>
    <span className="footer-title text-[#FF5A63]">Newsletter</span> 
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
  </div>
  
</footer>
<div className='footer footer-center bg-slate-400 p-4'>

    <p>Copyright © 2022 - All right reserved by Star Mobile</p>
  
</div>
  </div>
        
    );
};

export default Footer;