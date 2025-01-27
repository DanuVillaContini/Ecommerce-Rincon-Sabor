import styles from '../styles/homeStyles.module.css';

import LogoTitle from "../components/LogoTitle";
import Navbar from "../components/Navbar";
import SecondNavbar from "../components/SecondNavbar";
import MainCorousel from "../components/MainCorousel";
import CustomCards from '../components/CustomCards';
import img from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'

import CustomButtonCategorias from '../components/CustomButtonCategorias';
import imgCategoria from '../assets/categoria1.jpg'
import imgCategoria2 from '../assets/categoria2.jpg'
import imgCategoria3 from '../assets/categoria3.jpg'
import imgCategoria4 from '../assets/categoria4.jpg'

import Footer from '../components/Footer';

export default function HomeScreen() {
    return (
        <>
            {/* 1-  MAIN SECTION --- NAVBARS & CAROUSEL */}
            <Navbar />
            <LogoTitle />
            <SecondNavbar />
            <MainCorousel />

            {/* 2-  DESTACADOS SECTION  */}
            <div className={styles["section-custom"]}>
                <div className={styles["container-content"]}>
                    <div className={styles["container-title"]}>
                        <span className={styles["title-section"]}>DESTACADOS</span>
                    </div>
                    <div className={styles["grid"]}>
                        <CustomCards image={img} title="Smoothie de Banana y Ananá"
                            description="Delicioso smoothie natural de banana y ananá, perfecto para cualquier momento del día."
                            price="$6.500"
                        />
                        <CustomCards image={img2} title="Rolls de canela"
                            description="Delicioso smoothie natural de banana y ananá, perfecto para cualquier momento del día."
                            price="$1500"
                        />
                        <CustomCards image={img3} title="Smoothie Matcha"
                            description="Delicioso smoothie natural de banana y ananá, perfecto para cualquier momento del día."
                            price="$3.200"
                        />
                        <CustomCards image={img4} title="Smoothie Verde"
                            description="Delicioso smoothie natural de banana y ananá, perfecto para cualquier momento del día."
                            price="$6.200"
                        />
                    </div>
                </div>
            </div>

            {/* 3-   CATEGORIAS SECTION  */}
            <div className={styles["section-custom2"]}>
                <div className={styles["container-content2"]}>
                    <div className={styles["container-title"]}>
                        <span className={styles["title-section"]}>TODAS LAS CATEGORIAS</span>
                    </div>
                    <div className={styles["grid2"]}>
                        <CustomButtonCategorias image={imgCategoria} titleCategoria="DESAYUNOS/MERIENDAS" to="/categorias" />
                        <CustomButtonCategorias image={imgCategoria2} titleCategoria="PASTELERIA" to="/categorias"/>
                        <CustomButtonCategorias image={imgCategoria3} titleCategoria="BEBIDAS" to="/categorias"/>
                        <CustomButtonCategorias image={imgCategoria4} titleCategoria="SANDWICHES" to="/categorias"/>
                    </div>
                </div>
            </div>

            {/* 4-  COMO COMPRAR -  FORM QUEJAS SECTION */}
            <div className={styles["section-custom"]}>
                <div className={styles["container-content3"]}>
                    <div className={styles["text-section"]}>
                        <h2>¿Como comprar?</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority
                            have suffered alteration in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If you are going to
                            use a passage of Lorem Ipsum, you need to be sure there isn't anything
                            embarrassing hidden in the middle of text. All the Lorem Ipsum
                            generators on the Internet tend to repeat predefined chunks as necessary,
                            making this the first true generator on the Internet. I
                            t uses a dictionary of over 200 Latin words, combined with a handful
                            of model sentence structures, to generate Lorem Ipsum which looks
                            reasonable. The generated Lorem Ipsum is
                            therefore always free from repetition, injected humour,
                            or non-characteristic words etc.</p>
                    </div>
                    <div className={styles["form-section"]}>
                        <h2>Arrepentimiento de compra</h2>
                        <form>
                            <label htmlFor="name">Apellido y nombre *</label>
                            <input type="text" id="name" placeholder="Ingrese su apellido y nombre" required />

                            <label htmlFor="phone">Celular *</label>
                            <input type="tel" id="phone" placeholder="Ingrese su número de celular" required />

                            <label htmlFor="reason">Motivo de cancelación *</label>
                            <textarea id="reason" rows="3" placeholder="Describa el motivo de la cancelación" required></textarea>

                            <label htmlFor="order-number">Número de compra *</label>
                            <input type="text" id="order-number" placeholder="Ingrese el número de compra" required />
                            <div className={styles["container-button"]}>
                                <button type="submit">Enviar</button>

                            </div>
                        </form>
                    </div>

                </div>
            </div>

            {/* 5- f FOOTER SECTION */}
            <Footer/>
        </>
    )
}
