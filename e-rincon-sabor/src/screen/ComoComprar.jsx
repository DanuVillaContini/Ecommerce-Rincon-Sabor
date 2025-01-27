import LogoTitleCategorias from "../components/LogoTitleCategorias"
import Navbar from "../components/Navbar"
import styles from '../styles/comoComprarScreen.module.css'
import Footer from '../components/Footer';

function ComoComprar() {
    return (
        <>
            <Navbar />
            <LogoTitleCategorias categoria={"Como y donde comprar"} />

            {/* ---SECTION--- */}

            <div className={styles["section-custom"]}>
                <div className={styles["container-content"]}>
                    <div className={styles["text-section"]}>
                        <h2>¿Como comprar?</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority
                            have suffered alteration in some form, by injected humour, or randomised
                            words which don't look even slightly believable. </p>
                    </div>
                    <div className={styles["form-section"]}>
                        <h2>Formulario de consultas/arrepentimiento de compra</h2>
                        <form>
                            <label htmlFor="name">Apellido y nombre *</label>
                            <input type="text" id="name" placeholder="Ingrese su apellido y nombre" required />

                            <label htmlFor="phone">Celular *</label>
                            <input type="tel" id="phone" placeholder="Ingrese su número de celular" required />

                            <label htmlFor="reason">Motivo *</label>
                            <textarea id="reason" rows="3" placeholder="Describa el motivo de la cancelación" required></textarea>

                            <label htmlFor="order-number">Número de compra (coloque solo cero si es una consulta)* </label>
                            <input type="text" id="order-number" placeholder="Ingrese el número de compra" required />
                            <div className={styles["container-button"]}>
                                <button type="submit">Enviar</button>

                            </div>
                        </form>
                    </div>
                </div>
                <div className={styles["container-content"]}>
                    <div className={styles["map-section"]}>
                        <h2>Donde encontrarnos</h2>
                        <div >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4224.343280654831!2d-65.30560672381384!3d-26.800275988516667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225de11a3688a3%3A0x4271fe672b8dbf06!2sAlterpoint!5e1!3m2!1ses-419!2sar!4v1738003471983!5m2!1ses-419!2sar"
                                width="600"
                                height="700"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                    </div>
                </div>
            </div>

            {/* ---FOOTER */}
            <Footer />

        </>
    )
}

export default ComoComprar
