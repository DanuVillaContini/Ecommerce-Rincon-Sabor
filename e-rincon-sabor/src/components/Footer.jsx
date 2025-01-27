import styles from '../styles/homeStyles.module.css';

import footerIMG from '../assets/logo2.jpg';
import { NavLink } from 'react-router-dom';
import footerCard1 from '../assets/creditCards/efectivo.png'
import footerCard2 from '../assets/creditCards/bcoBBVA.png'
import footerCard3 from '../assets/creditCards/bcoNacion.png'
import footerCard4 from '../assets/creditCards/mastercard.png'
import footerCard5 from '../assets/creditCards/mercPago.png'
import footerCard6 from '../assets/creditCards/naranja.png'
import footerCard7 from '../assets/creditCards/paypal.png'
import footerCard8 from '../assets/creditCards/visa.png'
import CustomBttCreditCards from './CustomBttCreditCards';

function Footer() {
    return (
        <>
            {/* 5- f FOOTER SECTION */}
            <div className={styles["section-custom4"]}>
                <div className={styles["container-div1"]}>
                    <div className={styles["line"]}></div>
                    <img
                        src={footerIMG}
                        alt="Decorative icon"
                        className={styles["footer-img"]}
                    />
                    <div className={styles["line"]}></div>

                </div>
                <div className={styles["container-div2"]}>
                    <div className={styles["wrapper-links-nav"]}>
                        <div className={styles["footer-columns"]}>
                            <ul >
                                <li><NavLink to="/inicio" className={({ isActive }) => isActive ? "active-link" : ""}>Inicio</NavLink></li>
                                <li><NavLink to="/register" className={({ isActive }) => isActive ? "active-link" : ""}>Como comprar</NavLink></li>
                            </ul>
                        </div>
                        <div className={styles["footer-columns"]}>
                            <h3>Contáctanos</h3>
                            <p>General Paz 852 - San Miguel de Tucumán - Tucumán</p>
                            <p>ecommer-info-food@gmail.com</p>
                            <p>381 - 896 123</p>
                        </div>
                        <div className={styles["footer-columns"]}>
                            <h3>Sociales</h3>
                            <ul>
                                <li><NavLink to="/facebook" className={({ isActive }) => isActive ? "active-link" : ""}>Facebook</NavLink></li>
                                <li><NavLink to="/instagram" className={({ isActive }) => isActive ? "active-link" : ""}>Instagram</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles["container-div3"]}>
                    <CustomBttCreditCards image={footerCard1} alt={"Medio de pago en efectivo"} />
                    <CustomBttCreditCards image={footerCard2} alt={"Medio de pago con Tarjeta Banco BBVA"} />
                    <CustomBttCreditCards image={footerCard3} alt={"Medio de pago con Tarjeta Banco Nacion"} />
                    <CustomBttCreditCards image={footerCard4} alt={"Medio de pago con Tarjeta Mastercard"} />
                    <CustomBttCreditCards image={footerCard5} alt={"Medio de pago con Mercado Pago"} />
                    <CustomBttCreditCards image={footerCard6} alt={"Medio de pago con Tarjeta Naranja"} />
                    <CustomBttCreditCards image={footerCard7} alt={"Medio de pago con Paypal"} />
                    <CustomBttCreditCards image={footerCard8} alt={"Medio de pago con Tarjeta Visa"} />


                </div>
            </div>
        </>
    )
}

export default Footer
