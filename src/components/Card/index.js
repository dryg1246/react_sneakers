import React from "react";
import ContentLoader from "react-content-loader"
import styles from './Card.module.scss'
import AppContext from "../../context";


function Card({id, onAddToFavorite, title, imageUrl, favorited = false, price, onPlus, added, loading = false,}) {
    const {isItemAdded} = React.useContext(AppContext)
    const [isAdded, setIsAdded] = React.useState(added)
    const [isFavorite, setIsFavorite] = React.useState(favorited)

    const onClickPlus = () => {
        onPlus({id, title, imageUrl, price})
        setIsAdded(!isAdded)
    }

    const onClickFavorite = () => {
        onAddToFavorite({ id, title, imageUrl, price})
        setIsFavorite(!isFavorite)
    }
    return (
        <div className={styles.card}>
            {
                loading ?  <ContentLoader
                    speed={2}
                    width={150}
                    height={187}
                    viewBox="0 0 150 187"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="38" y="86" rx="0" ry="0" width="1" height="1" />
                    <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
                    <rect x="-1" y="97" rx="5" ry="5" width="150" height="15" />
                    <rect x="0" y="116" rx="5" ry="5" width="100" height="15" />
                    <rect x="0" y="146" rx="5" ry="5" width="80" height="24" />
                    <rect x="116" y="140" rx="10" ry="10" width="32" height="32" />
                </ContentLoader> :
                      <>
                    <div className={styles.favorite} onClick={onClickFavorite}>
                <img src={isFavorite ? "/img/liked.png" : "/img/unliked.png"} alt=""/>
            </div>
            <img width={133} height={112} src={imageUrl} alt=""/>
            <h5> {title} </h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price}</b>
                </div>
                <img className={styles.plus} onClick={onClickPlus}
                     src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt=""/>
            </div>
                </>
            }
        </div>);
}

export default Card;