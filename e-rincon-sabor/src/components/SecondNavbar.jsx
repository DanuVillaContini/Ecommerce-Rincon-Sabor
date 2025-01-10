import styles from "../styles/navbarStyles.module.css";

//fontMedium
function SecondNavbar() {
    return (
        <div>
            {/* Menú */}
            <nav className={styles["menu-container"]}>
                <ul className={styles["menu"]}>
                    <li className={styles["menu-item"]}><a href="#" >Inicio</a></li>
                    <li className={styles["menu-item"]}>
                        <a href="#">Productos ▼</a>
                        <ul className={styles["submenu"]}>
                            <li><a href="#">Café</a></li>
                            <li><a href="#">Tés</a></li>
                            <li><a href="#">Accesorios</a></li>
                        </ul>
                    </li>
                    <li className={styles["menu-item"]}><a href="#">Como comprar</a></li>
                    <li className={styles["menu-item"]}><a href="#">Contacto</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default SecondNavbar
