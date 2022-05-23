import React from "react";
import {  NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="my-5">
      <img
        className="block mx-auto"
        src="https://media.istockphoto.com/vectors/error-404-vector-id538038858"
        alt=""
      />
     <div className="text-center py-5">
     <NavLink
        to="/"
        className="px-4 py-2 no-underline rounded-lg bg-primary text-white"
      >
        Go Back Home
      </NavLink>
     </div>
    </div>
  );
};

export default NotFound;
