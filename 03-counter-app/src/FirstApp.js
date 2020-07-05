//import React, { Fragment } from 'react';
import React from 'react';

const FirstApp = ({name = 'Hi there'}) => {


    
    return (
        <>
            {/* <pre>{ JSON.stringify(greeting, null, 3)}</pre> */}
            <h1>{ name  }</h1>
            <p>Counter App</p>
        </>
        
    );


}

export default FirstApp;