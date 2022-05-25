import React from "react";

const UseRow = ({ myOrder, index }) => {
  const { email, name, product, _id } = myOrder;

  const deleteHandler = (id) => {
    fetch(`http://localhost:5000/products/${_id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td> {name}</td>
      <td>{email}</td>
      <td>{product}</td>
      <td>
        <button onClick={() => deleteHandler(_id)}>Cancel</button>
      </td>
      <td>
        <button>Payment</button>
      </td>
    </tr>
  );
};

export default UseRow;
