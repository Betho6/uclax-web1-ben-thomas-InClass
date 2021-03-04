import React from 'react';
import styled from 'styled-components';

import Label from "./Label.jsx"
import Field from "./Field.jsx"
import Error from "./Error.jsx"


const FieldGroup = ({id, theFields, handleFieldUpdate}) => {

        const theField = theFields.find((field)=>{
            return field.id === id;
        });

    return (
        <FieldGroupStyled className='FieldGroup'>
            <Label id={ id } theField={ theField } />
            <Field id={ id } theField={ theField }  handleFieldUpdate={ handleFieldUpdate }/>
            <Error id={ id } theField={ theField } />

        </FieldGroupStyled>
    );
}

export default FieldGroup;

const FieldGroupStyled = styled.div`
    
`;