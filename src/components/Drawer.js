function Drawer() {
    return (
        <div style={{display: 'none'}} className="overlay">
        <div className="drawer">
            <h2 className="mb-30 d-flex justify-between">Корзина <img className="remove-btn cu-p"
                                                                      src="/img/btn-remove.svg" alt="Remove"/>
            </h2>
            <div className="cartAll">
                <div className="cartItem d-flex align-center mb-20">

                    <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg"/>
                    <div className="mr-20 flex">
                        <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                        <b> 12 999 грн</b>
                    </div>
                    <img className="remove-btn" src="/img/btn-remove.svg" alt="Remove"/>
                </div>

                <div className="cartItem d-flex align-center mb-20">

                    <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg">

                    </div>
                    <div className="mr-20 flex">
                        <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                        <b> 12 999 грн</b>

                    </div>
                    <img className="remove-btn" src="/img/btn-remove.svg" alt="Remove"/>
                </div>

            </div>
            <div className="items">
                <ul className="cartTotalBlock">
                    <li className="d-flex">
                        <span>Итого: </span>
                        <div>

                        </div>
                        <b>21 498 грн </b>
                    </li>
                    <li className="d-flex">
                        <span>Доставка: </span>
                        <div>

                        </div>
                        <b>1000 грн</b>
                    </li>
                    <button className="greenBtn">
                        Оформить заказ <img src="/img/arrow.svg" alt=""/>
                    </button>
                </ul>
            </div>
        </div>
</div>
    )
}
export default Drawer;