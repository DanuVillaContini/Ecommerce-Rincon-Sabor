import { useState, useEffect } from 'react';
import styles from '../styles/corouselStyles.module.css';
import img1 from '../assets/coffee-beans-white-bckground-.jpg';
import img2 from '../assets/modern-coffee.jpeg';
import img3 from '../assets/cup-coffee.jpg';


function MainCarousel() {
    const slides = [
        {
            id: 1,
            image: img1,
            caption: 'Bienvenidos a El Rincón del Sabor',
        },
        {
            id: 2,
            image: img2,
            caption: 'Descubre nuestros productos',
        },
        {
            id: 3,
            image: img3,
            caption: '¡Compra desde la comodidad de tu hogar!',
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000); 
        return () => clearInterval(interval); 
    }, [slides.length]);

    return (
        <div className={styles["carousel"]}>
            <div className={styles["slidesContainer"]}>
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`${styles["slide"]} ${index === currentSlide ? styles.active : ''}`}
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        <img src={slide.image} alt={`Slide ${index + 1}`} className={styles["image"]} />
                        <div className={styles["overlay"]}>
                            <h2 className={styles["caption"]}>{slide.caption}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MainCarousel;
