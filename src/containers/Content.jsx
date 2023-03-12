import React, { useState } from "react";
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

    const [sortPrice, setSortPrice] = useState([]);
    const [showSorted, setShowSorted] = useState(false);

    const sortNow = () => {
        if (!showSorted) {
            const getSorted = [...products].sort((a, b) => a.price - b.price);
            setSortPrice(getSorted);
            setShowSorted(true);
        }
    }

    return (
        <div className="content_container">
            <div className="add_new_item">
                <Link to='/add_product'><button>ADD PRODUCT</button></Link>
            </div>
            <div id="sort_btn">
                <button onClick={() => sortNow()}>Sort By Price</button>
                <span> </span>
                {showSorted ? <button onClick={() => setShowSorted(false)}>&#10060;</button> : ""}
            </div>
            <div className="sub_container">
                <div className="cart_container">
                    {loading ? <Vortex />
                        : showSorted ?
                            sortPrice?.map((item => <SingleItem item={item} key={item.id} />))
                            : products?.map((item => <SingleItem item={item} key={item.id} />))
                    }
                </div>
            </div>
        </div>
    );
}

export default Content;