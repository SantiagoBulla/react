import React from 'react';
import PropTypes from 'prop-types';


const Filter = ({ active, onClickMethod, children }) => {

    if (active) {
        return (<span className='active'>{children}</span>)
    }

    return (
        <button
            className='filter'
            onClick={(e) => {
                e.preventDefault();
                onClickMethod();
            }}
        >
            {children}
        </button>
    );
};


Filter.propTypes = {
    active: PropTypes.bool.isRequired,
    onClickMethod: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired //elemento del DOM
};


export default Filter;
