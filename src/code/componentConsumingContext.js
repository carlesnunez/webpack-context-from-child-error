import React from 'react';
import {withContext} from './app.js';

class ComponentConsumingContext extends React.Component {
    render() {
        return <div>HEHE</div>
    }
}


export default withContext(ComponentConsumingContext)