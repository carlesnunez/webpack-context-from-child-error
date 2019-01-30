import React from 'react'
import ComponentConsumingHOC from './componentConsumingHOC.js'

export const myHOC = (Component) => {
    return (props) => {
        return (<Component {...props} />);
    };
};

export default () => (
    <React.Fragment>
        <ComponentConsumingContext />
    </React.Fragment>
)