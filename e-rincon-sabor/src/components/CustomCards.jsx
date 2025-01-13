import style from '../styles/cardStyles.module.css';
import icon from '../assets/carritoIcon.png';

function CustomCards({ image, title, description, price }) {
    return (
        <>
            <div className={style["card-wrapper"]}>
                <div className={style["card-image"]}>
                    <img className={style["image-custom"]} src={image} alt={title}></img>
                </div>
                <div className={style["content-card"]}>
                    <div className={style["title-card"]}>{title}</div>
                    <div className={style["descrip-card"]}>{description}</div>
                    <span className={style["price-card"]}>{price}</span>
                    <div className={style["btt-buy-card"]}>
                        <button className={style["bbt-custom"]}>Agregar al carrito</button>
                        <button className={style["icon-custom"]}>
                            <img src={icon} alt="Carrito"></img>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CustomCards;
