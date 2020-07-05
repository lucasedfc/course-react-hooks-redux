//import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({ name, subtitle }) => {

        
    return (
        <>
            {/* <pre>{ JSON.stringify(greeting, null, 3)}</pre> */}
            <h1>{ name  }</h1>
            <p>{subtitle}</p>
        </>
        
    );

}

FirstApp.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
}

FirstApp.defaultProps = {
    subtitle: ''
}

export default FirstApp;