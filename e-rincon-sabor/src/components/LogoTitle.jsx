import logo from '../assets/logo2.jpg';
import styles from "../styles/navbarStyles.module.css";
import stylesGeneral from "../styles/generalStyles.module.css"

export default function LogoTitle() {
    return (
        <div className={styles["logo-title"]}>
            <div>
                <img src={logo} alt="El Rincon del Sabor Logo" className={styles["logo"]} />
            </div>
            <div>
                <h1 className={stylesGeneral["fontTitle"]}>EL RINCÓN DEL SABOR</h1>
            </div>
        </div>
    )
}
