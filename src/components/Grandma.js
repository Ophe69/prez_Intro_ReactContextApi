import React, { useContext } from "react";
import grandma from '../images/grandma.png';
import Favorites from "./Favorites"
import { AppContext } from "../contexts/AppContext";
import Child  from "./Child";

const Grandma = () => {

    const { food, addFavorite } = useContext(AppContext);

    return (
        <div className="App">
            <header className="App-header">    
                <h1>Bienvenue chez Grandma!</h1>
                <img src={grandma} className="grandma-logo" alt="grandma" />
            </header>
            <div>
                {food.map((item, index) => {
                    return (
                    <div className="grandma-class" key={index}>
                        <p>{item.dish}</p>
                        <button onClick={() => addFavorite(item)}>J'en veux!</button>
                    </div>
                    );
                })}
                <Favorites />
                <Child />
            </div>
            
        </div>
    );
};

export default Grandma;
