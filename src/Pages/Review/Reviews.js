import React from "react";

const Reviews = ( {review} ) => {
  const  {name, comments, image}  = review;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">{name}</h2>
    <p>{comments}</p>
  </div>
</div>
  );
};

export default Reviews;
