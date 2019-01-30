import React from 'react'
import ComponentConsumingContext from './componentConsumingContext.js'

const ContextLocal = React.createContext();


export const Context = ContextLocal;

export const withContext = (Component) => {
    return (props) => {
        return (
            <ContextLocal.Consumer>
                {context => <Component {...props} context={context} />}
            </ContextLocal.Consumer>
        );
    };
};

export default () => <React.Fragment>
<ComponentConsumingContext />
</React.Fragment>