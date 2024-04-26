import React, { useEffect, useState } from "react";

function Cart() {
  const [data, setdata] = useState([]);
  const [temp, settemp] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch("http://localhost:3500/getdatacartproducts")
      .then((data) => data.json())
      .then((data) => {
        const products = data;
        if (products) {
          setdata(products);
          settemp(products);
        }
      });
  });
  console.log(data);

  const handleDelete = (data) => {
    console.log(data);

    // URL of the resource you want to delete
    const url = "http://localhost:3500/deletemethod/" + data?._id;
    console.log(url);

    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // You may need to include other headers like authorization token
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete resource");
        }
        // Handle success
        alert("product deleted");
      })
      .catch((error) => {
        // Handle error
        console.error("Error deleting resource:", error);
      });
  };

  const handleinc = (data) => {
    const url = `http://localhost:3500/updateqty/${data?._id}`;
    console.log(url);

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ qty: data.qty }),
    })
      .then((response) => console.log("increse"))
      .then((data) => {
        console.log("Update successful:", data);
        // You can perform additional actions here, such as updating the UI
      })
      .catch((error) => {
        console.error("Update failed:", error);
        // Handle errors here
      });
  };

  const handledec = (data) => {
    const url = `http://localhost:3500/updatdecqty/${data?._id}`;

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ qty: data.qty }),
    })
      .then((response) => console.log("incdecrese"))
      .then((data) => {
        console.log("Update successful:", data);
        // You can perform additional actions here, such as updating the UI
      })
      .catch((error) => {
        console.error("Update failed:", error);
        // Handle errors here
      });
  };

  return (
    <div>
      <h2>Cart</h2>

      <div class="container text-center">
        <div class="row">
          {data?.map((data) => {
            return (
              <div className="col-4 p-5">
                <div class="product">
                  <img
                    className="pro-img"
                    src={data?.images[0] || data?.images[1]}
                    alt="Product Image"
                  />
                  <div class="product-details">
                    <h6>{data?.title}</h6>
                    <p>${data?.price}</p>{" "}
                    <button onClick={() => handledec(data)}>-</button> Qty{" "}
                    {data?.qty || 1}{" "}
                    <button onClick={() => handleinc(data)}>+</button> <br />{" "}
                    <br />
                    <button onClick={() => handleDelete(data)}>delete</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button>Cheackout</button>
    </div>
  );
}

export default Cart;
