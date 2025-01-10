import { NavLink } from "react-router-dom";
import styles from "../styles/navbarStyles.module.css";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <nav className={styles["navbar"]}>
            <div className={styles["container"]}>
            <button
                    className={styles["menu-icon"]}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                >
                    ☰
                </button>
                <div
                    className={`${styles["nav-elements"]} ${
                        isMobileMenuOpen ? styles["active"] : ""
                    }`}
                >
                    <ul>
                        <li><NavLink to="/" className={styles["cart-link"]}>
                                <FaShoppingCart className={styles["cart-icon"]} />
                                (1)
                            </NavLink></li>
                        <li><NavLink to="/login">Iniciar Sesión</NavLink></li>
                        <li><NavLink to="/register">Crear Cuenta</NavLink></li>
                    </ul>

                </div>
            </div>
        </nav>

    )
}
