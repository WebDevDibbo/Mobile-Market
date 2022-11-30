import React, { useContext } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider";

const Mobiles = ({ phones, setService }) => {
  const {user} = useContext(AuthContext)
  const {
    name,
    _id,
    sold,
    image,
    location,
    ResalePrice,
    OriginalPrice,
    usedofyear,
    postDate,
    sellersName,
    condition,
    description,
    number,
    isVerify,
  } = phones;
  console.log(phones)
  return (
    <div>
      <div className="card card-compact w-96 mx-auto mb-10 shadow-xl rounded-lg border border-gray-300">
        <figure>
          <img className="rounded-lg" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name : {name}</h2>
          <p>Location : {location}</p>
          <p>Original Price : {OriginalPrice}</p>
          <p>Resale Price : {ResalePrice}</p>
          <p>usedofyear : {usedofyear}</p>
          <p>Post Date : {postDate.slice(0, 10)}</p>
          <p>Number : {number}</p>
          <p>Condition : {condition}</p>
          <p>Email : {user?.email}</p>
          <p className="flex items-center gap-3">
            Seller's Name : {sellersName}{" "}
            {isVerify && (
              <span>
                <FaCheckCircle className="text-blue-500" />
              </span>
            )}
          </p>
          <p>
            <small>Description : {description}</small>
          </p>
          <div className="card-actions justify-end">
            { sold ? <button disabled className="btn btn-outline btn-info rounded-lg px-4">Not Available</button> :
              <label
                htmlFor="booking-modal"
                onClick={() => setService(phones)}
                className="btn btn-outline btn-info rounded-lg px-4"
              >
                Book Now
              </label>
            }{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobiles;
