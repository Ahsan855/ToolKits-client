import React from "react";

const AddReview = () => {
  const handleReview = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const review = event.target.review.value;
    const userReview = {
      name: name,
      comments: review,
    };
    console.log(userReview);
    const url = `http://localhost:5000/review`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userReview),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className=" py-10">
      <h1 className="text-3xl m-10 text-primary font-semibold text-center">
        {" "}
        Add Review
      </h1>
      <div className=" flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  mx-auto">
          <div className="card-body">
            <form onSubmit={handleReview}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Review</span>
                </label>
                <input
                  type="text"
                  name="review"
                  placeholder="write a review"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary hover:text-white">
                  Add a Review
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
