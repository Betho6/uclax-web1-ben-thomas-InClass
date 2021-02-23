import React, {useState} from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/

import LightBox from '../../../Shared/Lightbox/LightBox.jsx'

const GalleryItem = ({ item }) => {

    const [showLightbox, showLightboxUpdate] = useState (false)
    
    const handleOnHide = () => {
        console.log('Closing Lightbox');
        showLightboxUpdate(false);
    }

    const handleOnShow = () => {
        showLightboxUpdate(true);

    }

    return (
            <GalleryItemStyled className='GalleryItem'>
            <div onClick= { handleOnShow }>           
                <img src={ item.image } alt={item.title} />
                {/* <h2>{ item.title } </h2> */}
                {/* <h3>{ item.category }</h3> */}
            </div>


            <LightBox 
                show= { showLightbox }
                onHide={ handleOnHide }
            />
                <img src={ item.image } alt={item.title} />
                {item.title} 
                
            </GalleryItemStyled>
    );
}

export default GalleryItem;

const GalleryItemStyled = styled.div`
position: relative;
margin: 10px;

h2{
    position: absolute;
    bottom: 0px; left:0px; right: 0px;
    background-color: rgba(255, 255, 255, 0.462);
    margin: 0px;
    padding: 5px;
    text-align: right;
}

h3 {
    position: absolute;
    top: 0px; left: 0px; right:0px;
    background-color: rgba(255, 255, 255, 0.462);
    margin: 0px;
    padding: 5px;
    text-align: right;

}
    
`;