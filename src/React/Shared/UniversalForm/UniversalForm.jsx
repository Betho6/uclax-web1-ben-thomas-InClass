import React, { useState } from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Button from './Button.jsx'
import FieldGroup from './FieldGroup/FieldGroup.jsx'

/* Scriots ---------------------------*/

import {isValidEmail} from '../../../common/utilities.js'

const UniversalForm = ({fields}) => {

    const [theFields, theFieldsUpdate] = useState(fields);

    const handleFieldUpdate = (theUpdatedField) => {

        /* Validation ---------------------------*/

        const validation = theUpdatedField.validation;

        let errors =[];

        validation.forEach((val)=> {
            switch (val) {
                case 'req':
                    if (theUpdatedField.value.length <1) {
                        errors.push(`the ${theUpdatedField.label} is requiered`);
                    }
                    break;
                case 'email':
                    if (!isValidEmail(theUpdatedField.value)) {
                            errors.push(`The ${theUpdatedField.label} is not a valid email`);
                        }
                        break;
                default: 
                    return true;
            }
        });

        let validatedField = {
            ...theUpdatedField,
            errors: errors,
        }

        console.log('validatedField', validatedField);


        /* Update Fields ---------------------------*/
        const newFields = theFields.map((field) => {
            return (field.id === validatedField.id) ? validatedField :field;
        });

        /* Updated State ---------------------------*/
        theFieldsUpdate(newFields);
    }

    return (
        <UniversalFormStyled className='UniversalForm'>
            <FieldGroup id='email' theFields= {theFields} handleFieldUpdate= { handleFieldUpdate} />
            <FieldGroup id= 'message' theFields= {theFields} handleFieldUpdate= { handleFieldUpdate} />
            <Button> Send Email</Button>
        </UniversalFormStyled>
    );
}

export default UniversalForm;

const UniversalFormStyled = styled.form`
max-width:100%;
padding: 10px;
margin: 50px auto;


    
`;