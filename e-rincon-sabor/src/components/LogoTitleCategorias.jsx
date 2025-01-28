import styles from "../styles/logoNavbarCategoria.module.css";
import logo from '../assets/iconNavBlack.png';
import { Link } from "react-router-dom";


function LogoTitleCategorias({ categoria }) {
    return (

        <div>
            <div className={styles["logo-title"]}>
                <div>
                    <Link to="/">
                        <img src={logo} alt="Categorias" className={styles["logo"]} />
                    </Link>
                </div>
                <div>
                    <h1 className={styles["fontTitle"]}>{categoria}</h1>
                </div>
            </div>

        </div>
    )
}

export default LogoTitleCategorias
