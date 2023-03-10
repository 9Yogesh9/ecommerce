import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Vortex } from 'react-loader-spinner';
import { useDispatch, useSelector } from "react-redux";

import {
    addProduct,
    getFromLocal,
    fetchProductsAsync,
    selectProduct
} from '../features/productSlice';

import {
    loadingFalse,
    loadingTrue,
    selectLoading
} from '../features/loadingSlice';

import CartItems from "../components/CartItems";
import '../index.css';

const Content = () => {
    const products = useSelector(selectProduct);
    const loading = useSelector(selectLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        const localData = localStorage.ecommerce ? JSON.parse(localStorage.ecommerce) : false;

        if (localData) {
            dispatch(getFromLocal());
        } else {
            dispatch(fetchProductsAsync());
        }

        dispatch(loadingFalse());
    }, [])

    // "https://my-json-server.typicode.com/9Yogesh9/ecommerce/cart" to get the list of items
    return (
        <>
            <div className="content_container">
                <div className="add_new_item">
                    <Link to='/add_product'><button>ADD PRODUCT</button></Link>
                </div>
                <div className="sub_container">
                    <div className="cart_container">
                        {loading ? <Vortex /> : products.map((item => <CartItems item={item} key={item.id} />))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Content;