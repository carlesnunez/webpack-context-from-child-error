import React from 'react';
import {myHOC} from './contextFile.js'

class ComponentConsumingHOC extends React.Component {
    render() {
        return <div>HEHE</div>
    }
}


export default myHOC(ComponentConsumingHOC)