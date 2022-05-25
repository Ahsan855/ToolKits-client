import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ allProduct }) => {
  const {
    _id,
    image,
    name,
    Price,
    shortDescription,
    minorderedqty,
    availableQuantity,
  } = allProduct;
  const navigate = useNavigate()
  const navigateHandler = (id)=>{

    navigate(`/purchase/${id}`)
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-20">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="card-body text-left">
        <h2 className="text-2xl text-primary">{name}</h2>
        <p className="text-sm">{shortDescription}</p>
        <p className="text-xl">MinQuantity : {minorderedqty}</p>
        <p className="text-xl">AvailableQantity : {availableQuantity}</p>
        <p className="text-xl">Price : $ {Price}</p>
        <p>
          <div class="rating gap-1">
            <input
              type="radio"
              name="rating-3"
              class="mask mask-heart bg-red-400"
            />
            <input
              type="radio"
              name="rating-3"
              class="mask mask-heart bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-3"
              class="mask mask-heart bg-yellow-400"
            />
            <input
              type="radio"
              name="rating-3"
              class="mask mask-heart bg-lime-400"
            />
            <input
              type="radio"
              name="rating-3"
              class="mask mask-heart bg-green-400"
            />
          </div>
        </p>
        <div className="card-actions justify-start mt-4">
          <button onClick={()=>navigateHandler(_id)} className="btn btn-primary btn-outline">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
