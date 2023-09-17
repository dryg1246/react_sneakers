import React from 'react';

function Drawer({ onClickClosed, onRemove, items = [] }) {
    console.log(items);
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="mb-30 d-flex justify-between">
                    Корзина
                    <img
                        onClick={onClickClosed}
                        className="remove-btn cu-p"
                        src="/img/btn-remove.svg"
                        alt="Remove"
                    />
                </h2>
                <div className="cartAll">

                    {Array.isArray(items) && items.map((obj) => (
                        <div className="cartItem d-flex align-center mb-20" key={obj.id}>
                            <div
                                style={{ backgroundImage: `url(${obj.imageUrl})` }}
                                className="cartItemImg"
                            ></div>
                            <div className="mr-20 flex">
                                <p className="mb-5">{obj.title}</p>
                                <b>{obj.price}грн</b>
                            </div>
                            <img
                                onClick={() => {onRemove(obj.id)}}
                                className="remove-btn"
                                src="/img/btn-remove.svg"
                                alt="Remove"
                            />
                        </div>
                    ))}
                </div>
                <div className="items">
                    <ul className="cartTotalBlock">
                        <li className="d-flex">
                            <span>Итого: </span>
                            <div></div>
                            <b>21 498 грн</b>
                        </li>
                        <li className="d-flex">
                            <span>Доставка: </span>
                            <div></div>
                            <b>1000 грн</b>
                        </li>
                        <button className="greenBtn">
                            Оформить заказ <img src="/img/arrow.svg" alt="" />
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Drawer;