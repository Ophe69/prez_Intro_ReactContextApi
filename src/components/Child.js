import React, { useContext } from 'react';
import { AppContext } from "../contexts/AppContext";
import GreatChild from './GreatChild';


const Child = () => {

    return (
        <div className="child">
            <header>    
                <h2>Les enfants veulent manger: </h2>
            </header>
            <GreatChild />
        </div>
    )
}

export default Child;
