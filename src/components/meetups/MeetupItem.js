import { useContext } from "react";
import Card from "../UI/Card";
import classes from "./MeetupItem.module.css";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
    const favoritesCtx = useContext(FavoritesContext);

    const isFav = favoritesCtx.isFavorite(props.id);

    function toggleFavoriteStatus() {
        if (isFav) {
            favoritesCtx.removeFavorite(props.id);
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                address: props.address,
                description: props.description,
                image: props.image,
            });
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt="" />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatus}>
                        {isFav ? "Remove from favorites" : "To Favorite"}
                    </button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;
