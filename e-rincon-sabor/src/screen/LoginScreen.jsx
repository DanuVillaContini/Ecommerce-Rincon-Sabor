import { useState } from 'react';
import style from '../styles/loginRegister.module.css'
import { Link } from 'react-router-dom';
import logo from '../assets/iconNavBlack.png';
import icon from '../assets/arrowBackLeft.png'

export default function LoginScreen() {
    const [formData, setFormData] = useState({ name: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Logging in with:", formData);
    };

    return (
        <div className={style["login-container"]}>
            <div className={style["login-box"]}>
                <div className={style['logo-container']}>
                    <div className={style["wrapper-icon"]}>
                        <Link to="/">
                            <img src={icon} alt="Categorias" className={style["icon"]} />
                        </Link>
                    </div>
                    <div className={style['wrapper-logo']}>
                        <img src={logo} alt="Categorias" className={style["logo"]} />
                    </div>
                </div>
                <h2>LOGIN</h2>
                <form onSubmit={handleSubmit}>
                    <div className={style["input-group"]}>
                        <label>Usuario</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={style["input-group"]}>
                        <label>Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">
                        🔒 Log in
                    </button>
                </form>
            </div>
        </div>
    )
}
