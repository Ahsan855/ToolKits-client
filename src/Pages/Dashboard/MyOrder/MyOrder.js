import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import UseRow from "./UseRow";

const MyOrder = () => {
  const [myOrders, setMyOrders] = useState([]);
  const [user] = useAuthState(auth);
  const email = user?.email;

  useEffect(() => {
    fetch(`https://lit-dawn-86542.herokuapp.com/order?email=${email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [myOrders]);
  return (
    <div className="p-20">
      <h1 className="text-3xl m-10 text-primary font-semibold"> My Order</h1>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Num</th>
              <th>Name</th>
              <th>Email</th>
              <th>Product name</th>
              <th>Cancel</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((myOrder, index) => (
              <UseRow myOrder={myOrder} index={index}></UseRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
