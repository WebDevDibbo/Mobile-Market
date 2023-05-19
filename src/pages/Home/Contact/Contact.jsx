import React from 'react';

const Contact = () => {
    return (
        <div className="card py-10 text-center shadow-xl">
        <p className="text-2xl font-bold text-black">Contact Us</p>
        
        <form>
        <div className="card-body mx-auto w-full md:w-1/2 lg:w-1/2 text-center">
        <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 mb-6 border"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-2 mb-6 border"
            required
          />
          <textarea
            className="p-2 h-24 border "
            name="message"
            placeholder="Your message"
            required
          ></textarea>
        

          <div className="card-actions justify-center mt-8">
            <button className="btn border-none shop-btn">
              Submit
            </button>
          </div>
        </div>
        </form>
      </div>
    );
};

export default Contact;