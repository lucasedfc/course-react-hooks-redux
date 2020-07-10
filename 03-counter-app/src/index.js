import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CounterApp from './CounterApp';
import FirstApp from './FirstApp';

const divRoot = document.querySelector('#root');

ReactDOM.render( <CounterApp /> , divRoot )
// ReactDOM.render( <FirstApp name='Hi Luke' /> , divRoot )


