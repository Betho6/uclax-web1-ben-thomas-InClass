import React from 'react';
import Slideshow from '../Welcome/Slideshow';

/* Componets------*/
import FilterNav from './FilterNav'
import Gallery from './Gallery'

const Services =() => {
    return (
        <div>
            <h1>Services</h1>
            <FilterNav />
            <Gallery />
        </div>
    );
}

export default Services;