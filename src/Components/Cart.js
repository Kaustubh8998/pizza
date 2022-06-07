import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

export default function Cart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("mycart") !== undefined) {
      const Items = JSON.parse(localStorage.getItem("mycart"));
      setData(Items);
    }
  }, []);

  const navigate = useNavigate();
  const checkOut = ()=>{
      navigate('/checkout')
  }
  return (
    <>
      <h3 className="py-3">Shopping Cart</h3>
      <div className="container-xs">
        <table className="table">
          <tbody>
            {data.map((pro,index) => 
              <tr key={index}>
                <td>{pro.image}</td>
                <td>{pro.title}</td>
                <td>{pro.price}</td>
                <td>{pro.quantity}</td>
                <td className="col-1">
                  <button className="btn btn-dark">Delete</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="container d-flex flex-row-reverse justify-content-around">
          <button className="btn btn-dark" onClick={() => checkOut()}>Check Out</button>
          <p className="fs-2">$ <span className="cart-total fs-2">0</span></p>
      </div>
    </>
  );
}
