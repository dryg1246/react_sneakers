import Card from '../components/Card';
import React from 'react';

function Home({
                  items,
                  cartItems,
                  searchValue,
                  setSearchValue,
                  onChangeSearchInput,
                  onAddToFavorite,
                  onAddToCart,
              }) {
    const renderItems = () => {
        return items
            .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, index) => (
                <Card
                    key={index}
                    onAddToFavorite={() => onAddToFavorite(item)} // Pass the whole item object
                    onPlus={() => onAddToCart(item)} // Pass the whole item object
                    added={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
                    {...item}
                />
            ));
    };

    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
                <div className="search-block d-flex">
                    <img src="/img/search.svg" alt="Search" />
                    {searchValue && (
                        <img
                            onClick={() => setSearchValue('')}
                            className="clear cu-p"
                            src="/img/btn-remove.svg"
                            alt="Clear"
                        />
                    )}
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
                </div>
            </div>

            <div className="d-flex flex-wrap">
                {renderItems()} {/* Invoke the renderItems function */}
            </div>
        </div>
    );
}

export default Home;