import React, { useContext } from 'react';
import { AppContext } from "../contexts/AppContext";


const GreatChild = () => {

    const { favorites, addFavorite, food } = useContext(AppContext);

    return (
        <div className="GreatChild">
            <header>    
                <h2>Les petit-enfants veulent manger: </h2>
            </header>
            <div>
                {food.map((item, index) => {
                    return (
                    <div key={index}>
                        <p>{item.dish}</p>
                        <button onClick={() => addFavorite(item)}>J'en veux!</button>
                    </div>
                    );
                })}
            
            </div>
        </div>
    )
}

export default GreatChild;
