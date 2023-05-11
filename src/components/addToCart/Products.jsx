import React, { useState } from "react";

const PAGE_PRODUCTS = "products";
const PAGE_CARTS = "carts";
const Products = () => {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);
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

  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  };

  const removeFromCart = (productToRemove) => {
    const deleteOne = cart.filter((product) => product !== productToRemove);
    setCart(deleteOne);
  };

  const renderProduct = () => {
    return (
      <>
        <h1>Products</h1>
        {products.map((product, id) => (
          <div key={id}>
            <h3>{product.name}</h3>
            <h4>{product.price}</h4>
            <img src={product.image} alt="" width={200} />
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </div>
        ))}
      </>
    );
  };

  const renderCart = () => {
    return (
      <>
        <h1>Cart</h1>
        {cart.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <h4>{item.price}</h4>
            <img src={item.image} alt="" width={200} />
            <button onClick={() => removeFromCart(item)}>
              Remove from cart
            </button>
          </div>
        ))}
      </>
    );
  };
  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };
  return (
    <div className="products">
      <header>
        <button onClick={() => navigateTo(PAGE_CARTS)}>
          go to cart ({cart.length})
        </button>
        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>view product</button>
      </header>
      {page === PAGE_PRODUCTS && renderProduct()}
      {page === PAGE_CARTS && renderCart()}
    </div>
  );
};

export default Products;
