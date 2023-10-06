import Card from '../components/Card';
import AppContext from "../context";
import React from "react";
function Favorites() {

    const {favorites, onAddToFavorite } = React.useContext(AppContext)
    console.log(favorites)

    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>Favorites</h1>
            </div>
            <div className="d-flex flex-wrap">
                {favorites.map((item) => (
                    <Card
                        key={item.id} // Use a unique identifier (e.g., item.id) as the key
                        favorited={true}
                        onAddToFavorite={onAddToFavorite}
                        {...item}
                    />
                ))}
            </div>
        </div>
    );
}

export default Favorites;