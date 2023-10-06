import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import "./index.scss";
import Header from './components/Header';
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favotites";
import AppContext from "./context";

function App(props) {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [favorites, setFavorites] = useState([]);
    const [cartOpened, setCartOpened] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const itemsResponse = await axios.get('https://64e47c12c555638029134b34.mockapi.io/items');
                const cartResponse = await axios.get('https://64e47c12c555638029134b34.mockapi.io/cart');
                const favoritesResponse = await axios.get('https://650a70e1dfd73d1fab086041.mockapi.io/favorites');

                setItems(itemsResponse.data);
                setCartItems(cartResponse.data);
                setFavorites(favoritesResponse.data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    const onAddToCart = (obj) => {
        try {
            if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
                setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(obj.id)));
            } else {
                axios.post('https://64e47c12c555638029134b34.mockapi.io/cart', obj);
                setCartItems((prev) => [...prev, obj]);
            }
        } catch (error) {
            alert('Error adding to cart');
        }
    };

    const onRemoveItem = (id) => {
        try {
            axios.delete(`https://64e47c12c555638029134b34.mockapi.io/cart/${id}`)
                .then(() => {
                    setCartItems((prev) => prev.filter(item => item.id !== id));
                })
        } catch (error) {
            alert('Error removing item from cart');
        }
    };

    const onAddToFavorite = async (obj) => {
        try {
            if (favorites.find((favObj) => favObj.id === obj.id)) {
                await axios.delete(`https://650a70e1dfd73d1fab086041.mockapi.io/favorites/${obj.id}`);
                setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));;
            } else {
                const { data } = await axios.post('https://650a70e1dfd73d1fab086041.mockapi.io/favorites', obj);
                setFavorites((prev) => [...prev, data]);
            }
        } catch (error) {
            alert('Error adding to favorites');
        }
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    const isItemAdded = (id) => {
        return cartItems.some((obj) => Number(obj.id) === Number(id))
    }

    return (
        <AppContext.Provider value={{items, favorites, cartItems, isItemAdded, onAddToFavorite}}>
        <div className="wrapper clear">
              {cartOpened && <Drawer items={cartItems} onClickClosed={() => setCartOpened(false)} onRemove={onRemoveItem} />}

             <Header onClickCart={() => setCartOpened(true)} />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            items={items}
                            cartItems={cartItems}
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            onChangeSearchInput={onChangeSearchInput}
                            onAddToFavorite={onAddToFavorite}
                            onAddToCart={onAddToCart}
                            Loading={isLoading}
                        />
                    }
                    exact
                />
                <Route
                    path="/favorites"
                    element={
                        <Favorites />
                    }
                    exact
                />

            </Routes>
        </div>
</AppContext.Provider>
    );
}

export default App;