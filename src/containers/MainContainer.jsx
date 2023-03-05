import React from 'react';

import Footer from './Footer';
import Content from './Content';
import Header from './Header';

const MainContainer = () => {
    return (
        <div style={full_screen}>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default MainContainer;

const full_screen = {
    width: '100vw', 
    height: '100vh', 
    backgroundColor: 'black', 
    color: 'white'
}
