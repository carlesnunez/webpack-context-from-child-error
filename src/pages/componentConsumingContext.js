import React from 'react';
//import {withContext} from './app.js';
import {withContext} from './contextFile.js'

class ComponentConsumingContext1 extends React.Component {
    render() {
        return <div>HEHE</div>
    }
}


export default withContext(ComponentConsumingContext1)