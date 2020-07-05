import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 10 }) => {

    const [counter, setCounter] = useState(value);
        

    // handle add
    const handleAdd = () => {
        // setCounter(counter + 1)
        setCounter((c) => c + 1);
    }

    const handleRemove = () => {
        setCounter(counter - 1)
    }

    const handleReset = () => {
        setCounter(value)
    }

    return (
        <>
            <h1>Counter App</h1>
            <p>{counter}</p>

            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleRemove}>-1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;