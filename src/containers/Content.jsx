import React, { useEffect } from "react";
import CartItems from "../components/CartItems";

import '../index.css';

const Content = () => {

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/9Yogesh9/ecommerce/cart")
        .then((response) => response.json())
        .then((data) => console.log(data));      
    }, [])
    

    // "https://my-json-server.typicode.com/9Yogesh9/ecommerce/cart" to get the list of items
    return (
        <div className="content_container">
            <div className="sub_container">
                <div className="cart_container">
                    <CartItems />
                    <CartItems />
                    <CartItems />
                    <CartItems />
                    <CartItems />
                    <CartItems />
                </div>
            </div>
        </div>
    );
}

export default Content;