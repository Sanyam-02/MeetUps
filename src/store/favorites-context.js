import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavotites: 0,
    addFavorite: (favoriteMeetup)=>{},
    removeFavorite: (meetupID)=>{},
    isFavorite: (meetupID)=>{}
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoritesHandler(favoriteMeetup) {
        setUserFavorites((prevUserFav) => {
            return prevUserFav.concat(favoriteMeetup);
        });
    }

    function removeFavoritesHandler(meetupID) {
        setUserFavorites((prevUserFav) => {
            return prevUserFav.filter(meetup => meetup.id !== meetupID);
        });
    }

    function isFavoritesHandler(meetupID) {
        return userFavorites.some(meetup => meetup.id === meetupID);
    }

    const context = {
        favorites: userFavorites,
        totalFavotites: userFavorites.length,
        addFavorite: addFavoritesHandler,
        removeFavorite: removeFavoritesHandler,
        isFavorite: isFavoritesHandler
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;