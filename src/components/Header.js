import {Link}  from "react-router-dom";

function Header(props) {
    console.log(props)
    return (
        <header className="d-flex justify-between align-center">
            <Link to="/">
            <div className="d-flex align-center">
                <img width={40} height={40} src="/img/logo.png" alt=""/>
                <div>
                    <h3 className="text-uppercase">React Sneakers</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
</Link>
            <ul className="d-flex">
                <li  onClick={props.onClickCart} className="mr-30 cu-p">
                    <img width={18} height={18} src="/img/cart.svg" alt=""/>
                    <span>1000 грн</span>
                </li>
                <li className="cu-p mr-20s">
                    <Link to="/favorites">
                        <img width={18} height={18} src="/img/heart.svg" alt=""/>
                    </Link>
                </li>
                <li>

                        <img width={18} height={18} src="/img/user.svg" alt=""/>

                </li>
            </ul>
        </header>
    )
}
export default Header;