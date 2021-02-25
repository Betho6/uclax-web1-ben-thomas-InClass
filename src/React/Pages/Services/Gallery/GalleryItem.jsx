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
            <div class='piece' onClick= { handleOnShow }>           
                <img src={ item.image } alt={item.title} />
                <h2>{ item.title } </h2> 
                <h3>{ item.category }</h3> 
            </div>


            <LightBox 
                show= { showLightbox }
                onHide={ handleOnHide }
            >
                <img src={ item.image } alt={item.title} />
                <h2>{ item.title } </h2> 
                <h3>{ item.category }</h3>  
            </LightBox>


            </GalleryItemStyled>
    );
}

export default GalleryItem;

const GalleryItemStyled = styled.div`
position: relative;
margin: 10px;

.piece{
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
}
    .Lightbox{
        img{
            display:block;
            max-width:100%;
        
        }
    }

    h2{
        background-color:maroon;
        color:white;
        padding: 10px;
        margin: 10px;
    }

`;