import logo from '../assets/LOGO.jpg';
import styles from "../styles/navbarStyles.module.css";

export default function LogoTitle() {
    return (
        <div className={styles["logo-title"]}>
            <img src={logo} alt="El Rincon del Sabor Logo" className={styles["logo"]}/>
            <h1 className={styles["title"]}>EL RINCON DEL SABOR</h1>
        </div>
    )
}
