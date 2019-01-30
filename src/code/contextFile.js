import React from 'react';

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