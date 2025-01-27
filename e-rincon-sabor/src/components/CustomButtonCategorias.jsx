import { useNavigate } from "react-router-dom";
import styles from '../styles/bttCategorias.module.css';

function CustomButtonCategorias({ image, titleCategoria, to }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to, { state: { titleCategoria } });
    };

    return (
        <div className={styles["card"]}>
            <div className={styles["content"]}>
                <div
                    className={styles["title"]}
                    onClick={handleClick} 
                >
                    {titleCategoria}
                </div>
                <img src={image} alt="Carrito" />
            </div>
            <div className={styles["overlay"]}>
                <span>{titleCategoria}</span>
            </div>
        </div>
    );
}

export default CustomButtonCategorias;
