import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">

            <h1>ART  FESTIVAL<span className="color"> 2021</span> </h1>
            <q>Every child is an artist. The problem is how to remain an artist once we grow up.</q>
            <h3 >Total Exibition: <span className="total-exbition">10</span></h3>
        </div>
    );
};

export default Header;