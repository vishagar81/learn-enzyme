import React from 'react';

const Hello = props => {
    return <p>Hello, {props.name || 'Unknown'}!</p>;
};

export default Hello;