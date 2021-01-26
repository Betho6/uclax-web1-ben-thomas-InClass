import React from 'react';
/* Components ---------------------------*/

import Profile from './Profile.jsx'
import ContactFrom from './ContactForm.jsx'
import GoogleMap from './GoogleMap'

const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>
            <Profile />
            <ContactFrom />
            <GoogleMap />
        </div>
    );
}

export default Contact;