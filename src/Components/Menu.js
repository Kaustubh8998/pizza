import React, { useState, useEffect } from "react";
import { getMenu } from "./Config/Myservices";

export default function Menu(pro) {
  const [proData, setProData] = useState([]);
  useEffect(() => {
    getMenu()
      .then((res) => setProData(res.data))
      .catch((err) => console.log(err));
  });

  const addtoCart = (id) => {
    if (localStorage.getItem("mycart") !== null) {
      let status = false;
      let arr = JSON.parse(localStorage.getItem("mycart"));
      console.log(arr);
      for (let i of arr) {
        if (i.pid === id) {
          status = true;
        }
      }
      if (status) {
        window.alert("Product Already Added");
      } else {
        let obj = { pid: id, quantity: 1 };
        arr.push(obj);
        localStorage.setItem("mycart", JSON.stringify(arr));
        // dispatch({ type: 'addcart', payload: arr });
        window.alert("Added to Cart successfully");
      }
    } else {
      let arr = [];
      let obj = { pid: id, quantity: 1};
      arr.push(obj);
      localStorage.setItem("mycart", JSON.stringify(arr));
      // dispatch({ type: 'addcart', payload: arr });
      window.alert("Added to Cart successfully");
    }
  };
  return (
    <>
      <div>
        <h2 className="pt-3">Menu</h2>
        <div className="row">
          {proData.map(pro =>
            <div className="col-md-4 py-4" key={pro.id}>
              <div className="card px-3 py-3" style={{ width: "18rem" }}>
                <img
                  src={pro.image}
                  className="card-img-top"
                  width={50}
                  height={150}/>
                <div className="card-body">
                  <h5 className="card-title text-center">{pro.title}</h5>
                </div>
                <div>
                  <button className="btn btn-dark col-6" onClick={() => addtoCart(pro.id)}>Add to Cart</button>
                  <span className="card-text col-6 ps-4">Price : ${pro.price}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
