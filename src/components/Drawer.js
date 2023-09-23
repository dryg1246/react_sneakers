import React from 'react';

function Drawer({ onClickClosed, onRemove, items = [] }) {
    console.log(items);
    return (
        <div>
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
                    {items.length > 0 ? (
                        <div>
                            <div className="cartAll">
                                {items.map((obj) => (
                                    <div className="cartItem d-flex align-center mb-20">
                                        <div
                                            style={{ backgroundImage: `url(${obj.imageUrl})` }}
                                            className="cartItemImg"></div>
                                        <div className="mr-20 flex">
                                            <p className="mb-5">{obj.title}</p>
                                            <b>{obj.price}грн</b>
                                        </div>
                                        <img
                                            onClick={() => {
                                                onRemove(obj.id)
                                            }}
                                            className="remove-btn"
                                            src="/img/btn-remove.svg"
                                            alt="Remove"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="items">
                                <div className="cartTotalBlock">
                                    <ul>
                                        <li>
                                            <span>Итого:</span>
                                            <div></div>
                                            <b>21 498 руб. </b>
                                        </li>
                                        <li>
                                            <span>Налог 5%:</span>
                                            <div></div>
                                            <b>1074 руб. </b>
                                        </li>
                                    </ul>
                                    <button className="greenBtn">
                                        Оформить заказ <img src="/img/arrow.svg" alt="Arrow"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                            <img className="mb-20" width="240" height="240" src="/img/empty-cart.jpg" alt="Empty"/>
                            <h2>Корзина пустая</h2>
                            <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                            <button onClick={onClickClosed} className="greenBtn">
                                <img  className="Arrow2" src="/img/arrow2.svg" alt="Arrow"/>
                                Вернуться назад
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Drawer;