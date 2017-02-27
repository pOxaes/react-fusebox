import React from 'react';

const Link = ({ active, children, onClick }) => {
    if (active) {
        return <span>{children}</span>;
    }

    return (
        <button type='button'
           onClick={e => {
               e.preventDefault();
               onClick();
           }}
        >
            {children}
        </button>
    );
};

export default Link;
