import React, { useEffect, useState } from "react";
import axios from "axios";
import {Route, Routes}  from "react-router-dom";
import "./index.scss";
import Header from './components/Header';
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favotites";

function App(props) {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [favorites, setFavorites] = useState([]);
    const [cardOpened, setCardOpened] = useState(false);

    useEffect(() => {
        axios.get('https://64e47c12c555638029134b34.mockapi.io/items')
            .then(res => {
                setItems(res.data)
            })
            .catch((error) => {
                console.error("Error fetching items:", error);
            });

        axios.get('https://64e47c12c555638029134b34.mockapi.io/cart')
            .then(res => {
                setCartItems(res.data)
            })
            .catch((error) => {
                console.error("Error fetching cart items:", error);
            });
        axios.get('https://64e47c12c555638029134b34.mockapi.io/favorites')
            .then(res => {
                setFavorites(res.data)
            })
            .catch((error) => {
                console.error("Error fetching cart items:", error);
            });
    }, []);

    const onAddToCart = (obj) => {
        axios.post('https://64e47c12c555638029134b34.mockapi.io/cart', obj)
            .then(() => {
                setCartItems((prev) => [...prev, obj]);
            })
            .catch((error) => {
                console.error("Error adding item to cart:", error);
            });
    };

    const onRemoveItem = (id) => {
        console.log(id)
        axios.delete(`https://64e47c12c555638029134b34.mockapi.io/cart/${id}`)
            .then(() => {
                setCartItems((prev) => prev.filter(item => item.id !== id));
            })
            .catch((error) => {
                console.error("Error removing item from cart:", error);
            });
    };

    const onAddToFavorite = (obj) => {
        axios.post('https://64e47c12c555638029134b34.mockapi.io/favorites', obj) // Use the correct endpoint URL for favorites
            .then(() => {
                setFavorites((prev) => [...prev, obj]);
            })
            .catch((error) => {
                console.error("Error adding item to favorites:", error);
            });
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <>
            <div className="wrapper clear">
                 {cardOpened && <Drawer items={cartItems} onClickClosed={() => setCardOpened(false)} onRemove={onRemoveItem} />}
                <Header onClickCart={() => setCardOpened(true)} />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                items={items}
                                searchValue={searchValue}
                                setSearchValue={setSearchValue}
                                onChangeSearchInput={onChangeSearchInput}
                                onAddFavorite={onAddToFavorite}
                                onAddToCart={onAddToCart}
                            />
                        }
                        exact
                    />
                    <Route
                        path="/favorites"
                        element={
                            <Favorites/>
                        }
                        exact
                    />
                </Routes>
            </div>
        </>
    );
}

export default App;