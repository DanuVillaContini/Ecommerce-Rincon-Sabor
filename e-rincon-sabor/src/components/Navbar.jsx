import styles from "../styles/navbarStyles.module.css";

export default function Navbar() {
    return (
        <nav className={`${styles["navbar"]}`}>
            <div className={styles["container"]}>
                <div className={styles["buttons"]}>
                    <button className={styles["button"]} onClick={() => {
                        // Implement login functionality here
                    }}>
                        Iniciar Sesión
                    </button>
                    <button className={styles["button"]} onClick={() => {
                        // Implement create account functionality here
                    }}>
                        Crear Cuenta
                    </button>
                </div>
            </div>
        </nav>
    )
}
