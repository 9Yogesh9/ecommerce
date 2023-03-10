import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Footer from './Footer';
import Content from './Content';
import Header from './Header';

import NotFound from '../components/NotFound';
import AddProduct from '../components/AddProduct';
import Cart from '../components/Cart';

const MainContainer = () => {
    return (
        <div style={full_screen}>
            <Header />
            <Routes>
                <Route path="/" element={<Content />} />
                <Route path="/add_product" element={<AddProduct />} />
                <Route path="/cart" element={<Cart />} />
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