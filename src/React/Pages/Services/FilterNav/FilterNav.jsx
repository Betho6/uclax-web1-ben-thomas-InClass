import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import FilterNavButton from './FilterNavButton.jsx'

const FilterNav = ({ services }) => {
    console.log ('FilterNav services', services);


    return (
        <FilterNavStyled className='FilterNav'>
            FilterNav 
            <FilterNavButton />
        </FilterNavStyled>
    );
}

export default FilterNav;

const FilterNavStyled = styled.div`
    
`;