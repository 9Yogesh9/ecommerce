import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Vortex } from 'react-loader-spinner';
import { useDispatch, useSelector } from "react-redux";
import { BiReset } from 'react-icons/bi';
import toast, { Toaster } from 'react-hot-toast';

import { emptyState, fetchProductsAsync, selectProduct } from '../features/productSlice';
import { selectLoading, loadingTrue, loadingFalse } from '../features/loadingSlice';

import SingleItem from "../components/SingleItem";
import '../index.css';

const Content = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProduct);
    const loading = useSelector(selectLoading);

    const [sortPrice, setSortPrice] = useState([]);
    const [showSorted, setShowSorted] = useState(false);

    const SortNow = () => {
        if (!showSorted) {
            const getSorted = [...products].sort((a, b) => b.price - a.price);
            setSortPrice(getSorted);
            setShowSorted(true);
        }
    }

    const RestoreApp = () => {
        dispatch(emptyState());
        dispatch(loadingTrue());
        localStorage.clear();
        Notify("Replenishing the Store. Please wait !", true);

        setTimeout(() => {
            dispatch(fetchProductsAsync());
            setTimeout(() => {
                dispatch(loadingFalse());
            }, 2000)
        }, 2000);
    }

    const Notify = (text, good) => { good ? toast.success(text) : toast.error(text) };

    return (
        <div className="content_container">
            <div id="add_new_item">
                <Link to='/add_product'><button>ADD PRODUCT</button></Link>
            </div>
            <div id="reset_app">
                <BiReset onClick={() => RestoreApp()} className="icon_control" />
            </div>
            <div id="sort_btn">
                <button onClick={() => SortNow()}>Sort By Price</button>
                <span> </span>
                {showSorted ? <button onClick={() => setShowSorted(false)}>&#10060;</button> : ""}
            </div>
            <div className="sub_container">
                <div className="cart_container">
                    {loading ?
                        <div className="middle_of_container">
                            <Vortex />
                        </div>
                        : products?.length > 0 ?
                            showSorted ?
                                sortPrice?.map((item => <SingleItem item={item} key={item.id} />))
                                : products?.map((item => <SingleItem item={item} key={item.id} />))
                            : <h1 className="middle_of_container">Store is empty ! Please Add Products to Store &#128512;</h1>
                    }
                </div>
            </div>
            <Toaster position="top-right" />
        </div>
    );
}

export default Content;