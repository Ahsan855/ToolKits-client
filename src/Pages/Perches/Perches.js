import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Perches = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [service, setService] = useState({});
  const email = user?.email;
  console.log(user);

  useEffect(() => {
    const url = `http://localhost:5000/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const purchaseHandler = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    console.log(name);
    const email = event.target.email.value;
    console.log(email);
    const number = event.target.number.value;
    console.log(number);

    const productTitle = event.target.product.value;

    const quantity = parseInt(event.target.quantity.value);
    console.log(quantity);
    const order = {
      name: name,
      email: email,
      number: number,

      product: productTitle,
      quantity: quantity,
    };

    if (quantity < service.minorderedqty) {
      alert("You cannot order more than the available quantity")
    }

    if (quantity > service.availableQuantity) {
      alert("You cannot order more than the available quantity")
    } else {
      fetch("http://localhost:5000/order", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-16 mt-16">
      <div className="card lg:card-side bg-base-100 shadow-xl style">
        <figure className="ml-10">
          <img src={service.image} alt="" />
        </figure>
        <div className="card-body div-style">
          <h2 className="card-title">
            <span className="text-2xl text-primary">Name:</span> {service.name}
          </h2>
          <h2 className="card-title">
            <span className="text-2xl text-primary">ShortDescription:</span>
            {service.shortDescription?.slice(0, 10)}
          </h2>
          <h2 className="card-title">
            {" "}
            <span className="text-2xl text-primary">
              {" "}
              Minimum Quantity:
            </span>{" "}
            {service.minorderedqty}
          </h2>
          <h2 className="card-title">
            {" "}
            <span className="text-2xl text-primary">Avilable Quantity:</span>
            {service.availableQuantity}
          </h2>
          <h2 className="card-title">
            <span className="text-2xl text-primary">Price:</span>{" "}
            {service.Price}
          </h2>
        </div>
      </div>

      <div>
        <div className="input-fil p-5">
          <h1 className="text-3xl text-primary">
            <span className="text-3xl font-bold text-primary text-center border-b-4 w-3xl mx-auto border-primary mt-2">
              Purchase Now
            </span>
          </h1>
          <form onSubmit={purchaseHandler} className="input-field">
            <div className="input-div">
              <input
                className="input input-bordered input-primary w-full max-w-xs my-5"
                name="name"
                type="text"
                placeholder="Name"
                defaultValue={user?.displayName}
                readOnly
                required
              />
              <br />
              <input
                className="input input-bordered input-primary w-full max-w-xs"
                name="email"
                type="email"
                placeholder="Your Email Address"
                defaultValue={user?.email}
                readOnly
                required
              />
              <br />

              <br />
              <input
                className="input input-bordered input-primary w-full max-w-xs mb-5"
                name="number"
                type="number"
                placeholder="Phone Number"
                required
              />
              <br />
              <input
                className="input input-bordered input-primary w-full max-w-xs mb-5"
                name="product"
                type="text"
                placeholder="product"
                defaultValue={service.name}
                readOnly
                required
              />
              <br />
              <input
                className="input input-bordered input-primary w-full max-w-xs"
                name="quantity"
                type="text"
                placeholder="quantity"
                required
              />
              <br />
            </div>
            <button className="btn btn-primary mt-5">Book Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Perches;
