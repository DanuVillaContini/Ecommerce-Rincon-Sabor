import { NavLink } from "react-router-dom";
import styles from "../styles/navbarStyles.module.css";

//fontMedium
function SecondNavbar() {
    return (
        <div>
            {/* Menú */}
            <nav className={styles["menu-container"]}>
                <ul className={styles["menu"]}>
                    <NavLink to="/" className={styles["menu-item"]}>Inicio</NavLink>
                    <li className={styles["menu-item"]}>
                        <a href="#">Productos ▼</a>
                        <ul className={styles["submenu"]}>
                            <li><NavLink to="/categorias" className={styles["title"]}>Desayunos y meriendas</NavLink></li>
                            <li><NavLink to="/categorias" className={styles["title"]}>Pasteleria</NavLink></li>
                            <li><NavLink to="/categorias" className={styles["title"]}>Bebidas</NavLink></li>
                            <li><NavLink to="/categorias" className={styles["title"]}>Sandwiches</NavLink></li>
                        </ul>
                    </li>
                    <NavLink to="/" className={styles["menu-item"]}>Como comprar</NavLink>
                    <NavLink to="/" className={styles["menu-item"]}>Contacto</NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default SecondNavbar
