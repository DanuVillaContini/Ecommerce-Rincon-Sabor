import styles from '../styles/bttCategorias.module.css';
function CustomButtonCategorias({image, title}) {
    return (
        <>
            <div className={styles["card"]}>
                <div className={styles["content"]}>
                    <span className={styles["title"]}>{title}</span>
                    <img src={image} alt="Carrito" />
                </div>
                <div className={styles["overlay"]}>
                    <span>{title}</span>
                </div>
            </div>
        </>
    )
}

export default CustomButtonCategorias
