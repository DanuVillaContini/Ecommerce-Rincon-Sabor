// import styles from '../styles/bttCategorias.module.css';
import styles from '../styles/homeStyles.module.css';



import LogoTitle from "../components/LogoTitle";
import Navbar from "../components/Navbar";
import SecondNavbar from "../components/SecondNavbar";
import MainCorousel from "../components/MainCorousel";
import CustomCards from '../components/CustomCards';
// import CustomSection from '../components/CustomSection';
import img from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'

import CustomButtonCategorias from '../components/CustomButtonCategorias';
import imgCategoria from '../assets/categoria1.jpg'
import imgCategoria2 from '../assets/categoria2.jpg'
import imgCategoria3 from '../assets/categoria3.jpg'
import imgCategoria4 from '../assets/categoria4.jpg'



// import img2 from '../assets/changuche.jpg';



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
                    <div>
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
                    <div>
                        <span className={styles["title-section"]}>TODAS LAS CATEGORIAS</span>
                    </div>
                    <div className={styles["grid2"]}>
                        <CustomButtonCategorias image={imgCategoria} title="DESAYUNOS/MERIENDAS" />
                        <CustomButtonCategorias image={imgCategoria2} title="PASTELERIA" />
                        <CustomButtonCategorias image={imgCategoria3} title="BEBIDAS" />
                        <CustomButtonCategorias image={imgCategoria4} title="SANDWICHES" />
                    </div>
                </div>
            </div>

            {/* 4-  COMO COMPRAR -  FORM QUEJAS SECTION */}



            {/* 5- f FOOTER SECTION */}

        </>
    )
}
