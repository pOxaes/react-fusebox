import React from 'react';

const Link = ({ active, children, onClick }) => {
    if (active) {
        return (
            <button type='button'
                className="active">
                {children}
            </button>
        );
    }

    return (
        <button type='button'
           onClick={e => {
               e.preventDefault();
               onClick();
           }}>
           {children}
        </button>
    );
};

export default Link;
