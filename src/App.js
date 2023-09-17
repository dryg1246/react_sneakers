import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.scss";
import Card from './components/Card';
import Header from './components/Header';
import Drawer from "./components/Drawer";


function App(props) {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [searchValue, setSearchValue] = useState('');
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
                setCartItems((prev) => prev.filter(item => item.id !== id)); // Use !== instead of === to filter out the item
            })
            .catch((error) => {
                console.error("Error removing item from cart:", error);
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

                <div className="content p-40">
                    <div className="d-flex align-center justify-between mb-40">
                        <h1 className="">{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
                        <div className="searchBlock d-flex">
                            <img src="/img/search.svg" alt="Search" />
                            {searchValue && <img onClick={() => setSearchValue('')} className="clear cu-p" src="/img/btn-remove.svg" alt="Remove" />}
                            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск...." />
                        </div>
                    </div>

                    <div className="d-flex flex-wrap">
                        {items
                            .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())) // Convert both item title and searchValue to lowercase for case-insensitive search
                            .map((item, index) => (
                                <Card
                                    key={index}
                                    title={item.title}
                                    price={item.price}
                                    imageUrl={item.imageUrl}
                                    onFavorite={() => console.log('Добавили в закладки')}
                                    onPlus={() => onAddToCart(item)} // Pass the entire item object to onAddToCart
                                />
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;