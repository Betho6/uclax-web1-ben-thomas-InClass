import react from 'react';

import Header from './Header.jsx';
import Nav from './Nav.jsx';
import SunAndMoon from './SunAndMoon.jsx';
import Footer from './Footer.jsx';



const Container = () => {

    return (
        <div classname='container'>
            CONTENT
            <Header />
            <Nav />
            <SunAndMoon />
            <Footer />
        </div>
    );
}

export default Container;