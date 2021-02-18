import React from 'react';
import styled from 'styled-components';

import GalleryItem from './GalleryItem.jsx';

/* Interesting ---------------------------*/
//import {services} from '../../Services/servicesData.js';

const Gallery = ({services, catChosen, catChosenUpdate}) => {
    
    return (
        <GalleryStyled className='Gallery'>
            {
                services.packages
                .filter((item) =>{
                    return (item.category === 'All' || catChosen)
                })
                .map((item, idx) => {  
                    return <GalleryItem key={ idx } item= {item} />
                })
            }
            <GalleryItem /> 
        </GalleryStyled>
    );
}

export default Gallery;

const GalleryStyled = styled.div`
display: flex;

flex-wrap: wrap;
justify-content:center;
    
`;