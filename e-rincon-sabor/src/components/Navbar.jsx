import { NavLink } from "react-router-dom";
import styles from "../styles/navbarStyles.module.css";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isMobileMenuOpen]);

    return (
        <nav className={styles["navbar"]}>
            <div className={styles["container"]}>
                {/* Ícono del menú hamburguesa */}
                <button
                    className={styles["menu-icon"]}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                >
                    ☰
                </button>

                {/* Contenedor del menú */}
                <div className={`${styles["nav-elements"]} ${isMobileMenuOpen ? styles["active"] : ""}`}>
                    <button className={styles["close-icon"]}
                        onClick={toggleMenu}
                        aria-label="Close navigation">
                        &times;
                    </button>

                    {/* Links del menú */}
                    <ul>
                        <li>
                            <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/login" onClick={() => setMobileMenuOpen(false)}>
                                Iniciar Sesión
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/register" onClick={() => setMobileMenuOpen(false)}>
                                Crear Cuenta
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
