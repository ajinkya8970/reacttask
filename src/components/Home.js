import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const [temp, settemp] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3500/getdata")
      .then((data) => data.json())
      .then((data) => {
        const products = data[0]?.products;
        if (products) {
          setdata(products);
          settemp(products);
        }
      });
    //  setdata(data[0]?.products));
  }, []);

  const handleSmartphone = () => {
    const evenNumbers = temp?.filter((word) => word?.category == "smartphones");

    setdata(evenNumbers);
  };

  const handlefragrances = () => {
    const evenNumbers = temp?.filter((word) => word?.category == "fragrances");

    setdata(evenNumbers);
  };
  const handlelaptops = () => {
    const evenNumbers = temp?.filter((word) => word?.category == "laptops");

    setdata(evenNumbers);
  };
  const handleskincare = () => {
    const evenNumbers = temp?.filter((word) => word?.category == "skincare");

    console.log(evenNumbers);

    setdata(evenNumbers);
  };
  const handlegroceries = () => {
    const evenNumbers = temp?.filter((word) => word?.category == "groceries");

    setdata(evenNumbers);
  };

  const handleAll = () => {
    setdata(temp);
  };

  const handleAddtocart = (data) => {
    fetch("http://localhost:3500/adddtocart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers if needed
      },
      body: JSON.stringify({
        // Add your data here

        title: data.title,
        images: data.images,
        price: data.price,
      }),
    })
      .then((response) => alert("Product added succesfully"))
      .then((data) => {
        // Handle the response data
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error:", error);
      });
  };

  const handleCartsignin = () => {
    if (sessionStorage.getItem("token")) {
      navigate("/cart");
    } else {
      alert("please login first");
      navigate("/signup");
    }
  };

  return (
    <div>
      <div class="navbar">
        <a href="#" class="logo">
          myecommerse site
        </a>
        <div class="nav-links">
          <a href="#">
            <Link to={"/signin"}> Sign In</Link>{" "}
          </a>
          <a href="#">
            <Link to={"/signup"}> Register</Link>{" "}
          </a>
          <a href="#" class="cart-icon" onClick={handleCartsignin}>
            {" "}
            <i class="fas fa-shopping-cart"></i>
          </a>
        </div>
      </div>
      <div class="buttons">
        <button class="button all active" onClick={handleAll}>
          All
        </button>
        <button class="button white" onClick={handleSmartphone}>
          smartphones
        </button>
        <button class="button grey" onClick={handlefragrances}>
          fragrances
        </button>
        <button class="button blue" onClick={handlelaptops}>
          laptops
        </button>
        <button class="button yellow" onClick={handleskincare}>
          skincare
        </button>
        <button class="button red" onClick={handlegroceries}>
          groceries
        </button>
      </div>
      {/* navbar end */}
      {/* <div className="container">
        <div className="row">
          {data?.map((data) => {
            return <div>hii</div>;
          })}
        </div>
      </div> */}

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
                    <p>${data?.price}</p>
                    <button onClick={() => handleAddtocart(data)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
