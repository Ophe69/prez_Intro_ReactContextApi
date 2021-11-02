import React, { createContext, useEffect, useState } from "react";
export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
    
    const [ favorites , setFavorites] = useState([]);

    const [ food, setFood ] = useState([
        {
            id: 1,
            dish: "Bourguignon"
          },
          {
            id: 2,
            dish: "Couscous"
          },
          {
            id: 3,
            dish: "Paëlla",
          },
          {
            id: 4,
            dish: "Choucroute"
          }
        ]);

    const addFavorite = (item) => {

      setFavorites([ ...favorites, item]);
    };

    useEffect(() => {
      console.log(favorites);
    }, [favorites]);

    
        return (
            <AppContext.Provider value={{ addFavorite, food, favorites }}>
                {children}
            </AppContext.Provider>
        )
};
export default AppProvider;
