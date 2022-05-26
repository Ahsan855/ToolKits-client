import React from "react";

const Reviews = ({ review }) => {
  const { name, comments } = review;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://wp.brator.xyz/wp-content/uploads/2021/10/review-01.png"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{comments}</p>
      </div>
    </div>
  );
};

export default Reviews;
