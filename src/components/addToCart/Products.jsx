import React, { useState } from "react";

const Products = () => {
  const [products] = useState([
    {
      name: "battery",
      price: "2.99",
      image:
        "https://www.duracell.com/wp-content/uploads/2022/06/eContent-PI-Duracell_Renders_N_Boost_Battery_Cell.png",
    },
    {
      name: "blanket",
      price: "12.99",
      image:
        "https://m.media-amazon.com/images/I/81CGKCHLbML._AC_UF894,1000_QL80_.jpg",
    },
  ]);
  return (
    <div className="products">
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <h4>{product.price}</h4>
          <img src={product.image} alt="" width={200} />
          <button>Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
