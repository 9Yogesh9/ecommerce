import React from "react";
import { Link } from "react-router-dom";
import { Vortex } from 'react-loader-spinner';
import { useSelector } from "react-redux";

import { selectProduct } from '../features/productSlice';
import { selectLoading } from '../features/loadingSlice';

import SingleItem from "../components/SingleItem";
import '../index.css';

const Content = () => {
    const products = useSelector(selectProduct);
    const loading = useSelector(selectLoading);

    return (
        <div className="content_container">
            <div className="add_new_item">
                <Link to='/add_product'><button>ADD PRODUCT</button></Link>
            </div>
            <div className="sub_container">
                <div className="cart_container">
                    {loading ? <Vortex /> : products?.map((item => <SingleItem item={item} key={item.id} />))}
                </div>
            </div>
        </div>
    );
}

export default Content;