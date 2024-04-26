import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log(products);

  return (
    <div>
      <h3>Products</h3>
      {/* {products?.map((product) => (
          <li key={product._id}>
            {product.name} - {product.price} - <button>Add to Cart</button>
          </li>
        ))} */}

      <div className="col-md-3 col-sm-6">
        <div className="white-box">
          <div className="wishlist-icon">
            <a href="javascript:void(0);">
              <img src="https://pngimage.net/wp-content/uploads/2018/06/wishlist-icon-png-3.png" />
            </a>
          </div>
          <div className="product-img">
            <img src="https://www.91-img.com/pictures/laptops/asus/asus-x552cl-sx019d-core-i3-3rd-gen-4-gb-500-gb-dos-1-gb-61721-large-1.jpg" />
          </div>
          <div className="product-bottom">
            <div className="product-name">Asus X552CL-SX019D Laptop</div>
            <div className="price">
              <span className="rupee-icon">₹</span> 32,000
            </div>
            <a href="#" className="blue-btn">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
