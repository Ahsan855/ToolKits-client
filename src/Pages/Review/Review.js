import React, { useEffect, useState } from "react";
import Reviews from "./Reviews";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://lit-dawn-86542.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, []);
  return (
    <div className="py-24">
      <h1 className="text-center py-10">
        <span className="text-3xl font-bold text-primary text-center border-b-4 w-3xl mx-auto border-primary mt-2">
          All Reviews
        </span>
      </h1>
      <div className="grid lg:grid-cols-3 gap-3 md:grid-cols-2 grid-cols-1">
        {reviews.map((review) => (
          <Reviews review={review}></Reviews>
        ))}
      </div>
    </div>
  );
};

export default Review;
