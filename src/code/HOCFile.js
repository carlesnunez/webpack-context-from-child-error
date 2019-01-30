import React from 'react'

export const myHOC = (Component) => {
    return (props) => {
        return (<Component {...props} />);
    };
};