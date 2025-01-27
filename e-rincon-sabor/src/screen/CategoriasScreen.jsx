import { useState, useEffect } from "react";
import CustomCards from "../components/CustomCards";
import Navbar from "../components/Navbar";
import img from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import styles from '../styles/categoriaScreen.module.css';
// import style from '../styles/homeStyles.module.css';

import LogoTitleCategorias from "../components/LogoTitleCategorias";
import { NavLink, useLocation } from "react-router-dom";
import Footer from "../components/Footer";

function CategoriasScreen() {
    const location = useLocation();
    const { titleCategoria: titleFromLocation } = location.state || {};
    const [titleCategoria, setTitleCategoria] = useState(titleFromLocation || 'Categoría no disponible');

    // Este efecto asegura que si la URL tiene un valor de categoria, se actualice el estado
    useEffect(() => {
        if (titleFromLocation) {
            setTitleCategoria(titleFromLocation);
        }
    }, [titleFromLocation]);

    const handleMenuClick = (categoria) => {
        setTitleCategoria(categoria);
    };

    return (
        <>
            {/* 1-  MAIN SECTION --- NAVBARS & CAROUSEL */}
            <Navbar />
            <LogoTitleCategorias categoria={titleCategoria} />

            {/* Menú */}
            <nav className={styles["menu-container"]}>
                <ul className={styles["menu"]}>
                    <NavLink
                        to="/categorias"
                        className={styles["menu-item"]}
                        onClick={() => handleMenuClick("DESAYUNOS Y MERIENDAS")}
                    >
                        Desayunos y meriendas
                    </NavLink>
                    <NavLink
                        to="/categorias"
                        className={styles["menu-item"]}
                        onClick={() => handleMenuClick("PASTELERIA")}
                    >
                        Pasteleria
                    </NavLink>
                    <NavLink
                        to="/categorias"
                        className={styles["menu-item"]}
                        onClick={() => handleMenuClick("BEBIDAS")}
                    >
                        Bebidas
                    </NavLink>
                    <NavLink
                        to="/categorias"
                        className={styles["menu-item"]}
                        onClick={() => handleMenuClick("SANDWICHES")}
                    >
                        Sandwiches
                    </NavLink>
                </ul>
            </nav>

            {/* 2-  PRODUCTS SECTION  */}
            <div className={styles["section-custom"]}>
                <div className={styles["container-content"]}>
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

            {/* 5- f FOOTER SECTION */}
            <Footer />
        </>
    );
}

export default CategoriasScreen;
