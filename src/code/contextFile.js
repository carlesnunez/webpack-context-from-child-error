import React from 'react';

const ContextLocal = React.createContext();


export const Context = ContextLocal;

export const withContext = (Component) => {
    return (props) => {
        // IDK why do we get am undefined component here
        if(!Component) {
            return null;
        }
        console.log('----------------->333',Component);
        return (
            <ContextLocal.Consumer>
                {context => <Component {...props} context={context} />}
            </ContextLocal.Consumer>
        );
    };
};