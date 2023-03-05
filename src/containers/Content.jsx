import React from "react";
import CartItems from "../components/CartItems";

import '../index.css';

const Content = () => {
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