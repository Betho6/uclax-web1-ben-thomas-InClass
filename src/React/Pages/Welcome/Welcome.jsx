import React from 'react';

/* Components------*/
// import Slideshow from './Slideshow'; 
import Tabbed from './Tabbed/Tabbed';
import Staff from './Staff/Staff';

const Welcome = () => {
    return (
        <div>
            <h1>Welcome</h1>
            {/* <Slideshow />  */}
            <div className= "nested" >
                <Tabbed />
            </div>

            <div className= "nested" >
            <Staff />
            </div>

        </div>
    );
}

export default Welcome;