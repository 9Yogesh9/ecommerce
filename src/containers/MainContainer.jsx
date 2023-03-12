import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Footer from './Footer';
import Content from './Content';
import Header from './Header';

import NotFound from '../components/NotFound';
import AddProduct from '../components/AddProduct';
import Cart from '../components/Cart';
import ProductDetails from '../components/ProductDetails';

import { fetchProductsAsync, } from '../features/productSlice';
import { loadingFalse, } from '../features/loadingSlice';

const MainContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductsAsync());
        dispatch(loadingFalse());
    }, [])

    // "https://my-json-server.typicode.com/9Yogesh9/ecommerce/cart" to get the list of items
    return (
        <div style={full_screen}>
            <Header />
            <Routes>
                <Route path="/" element={<Content />} />
                <Route path="/add_product" element={<AddProduct />} />
                <Route path="/add_product/:id" element={<AddProduct />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product_details/:id" element={<ProductDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default MainContainer;

const full_screen = {
    width: '100vw',
    height: '100vh',
    // backgroundColor: 'black', 
    // color: 'white'
}