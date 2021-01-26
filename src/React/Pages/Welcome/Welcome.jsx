import React from 'react';

/* Components------*/
import Slideshow from './Slideshow';
import Tabbed from './Tabbed';
import Staff from './Staff';

const Welcome = () => {
    return (
        <div>
            <h1>Welcome</h1>

            <Slideshow />
            <Tabbed />
            <Staff />
        </div>
    );
}

export default Welcome;