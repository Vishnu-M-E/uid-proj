import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, removeOne } from "../redux/features/navbar/navbarSlice";
import { useNavigate } from "react-router-dom";

import "../styles/ShoppingCart.css";

function ShoppingCart() {
  const productsInShoppingCart = useSelector((state) => state.navbarReducer.value); // productsInShoppingCart is an array

  


  const dispatch = useDispatch();

  const navigate = useNavigate();

  const defaultStyle = {
    color: "#9d174d",
    cursor: "pointer"
  }

  const otherStyle = {
    color: "#dcd9d9",
    cursor: "default"
  }

  return (
    <>
      <h1 id="shopping-cart-heading">SHOPPING CART</h1>
        <>
          {productsInShoppingCart.map((eachProduct, index) => (
            <div id="single-cart-container" key={index}>
              <img src={eachProduct.thumbnail} alt={"product image"} onClick={() => navigate(`/details/${eachProduct.id}`)} />

              <div id="details">
                <span id="brand">{eachProduct.brand}</span>
                <span id="title">{eachProduct.title}</span>
              </div>

              <div id="edit">
                <div id="minus" onClick={() => dispatch(removeOne(eachProduct.id))} style={eachProduct.quantity < 2 ? otherStyle : defaultStyle}>-</div>
                <div id="quantity">{eachProduct.quantity}</div>
                <div id="plus" onClick={() => dispatch(add(eachProduct))}>+</div>
              </div>

              <div id="price">
                <span id="dolar-span">$</span>
                <span id="price-span">{eachProduct.price * eachProduct.quantity}</span>
                <span
                  id="trash-icon"
                  onClick={() => dispatch(remove(eachProduct.id))}>
                  
                </span>
              </div>

            </div>
          ))}

          
        </>
      )
    </>
  );
}

export default ShoppingCart;
