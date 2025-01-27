import style from '../styles/generalStyles.module.css'

function CustomBttCreditCards({ image, alt }) {
    return (
        <div className={style["container-img-credit-card"]}>
            <img src={image} alt={alt} className={style["custom-img-credit-card"]} />
        </div>
    )
}

export default CustomBttCreditCards
