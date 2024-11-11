import React from 'react';

const Header = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Best Top 3 {props.title}</h1>
        </div>
    );
};

export default Header;