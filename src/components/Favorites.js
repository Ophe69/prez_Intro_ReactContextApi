import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

const Favorites = () => {

    const { favorites } = useContext(AppContext);
    return (
        <div>
            <h2>Aujourd'hui au menu chez Grandma:</h2>
            {favorites.map((item, index) => {
                return (<p key={index}>{item.dish}</p>
                
                );
                })
            }
        </div>
    )
}

export default Favorites
