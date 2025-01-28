import { useState } from 'react';
import style from '../styles/loginRegister.module.css'
import { Link } from 'react-router-dom';
import logo from '../assets/iconNavBlack.png';
import icon from '../assets/arrowBackLeft.png'
export default function RegisterScreen() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registering with:", formData);
    };

    return (
        <div className={style["register-container"]}>
            <div className={style["register-box"]}>
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
                <h2>Registro</h2>
                <form onSubmit={handleSubmit}>
                    <div className={style["input-group"]}>
                        <label>First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={style["input-group"]}>
                        <label>Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={style["input-group"]}>
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={style["input-group"]}>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={style["input-group"]}>
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button className={style["btt-register"]} type="submit">✅ Register</button>
                </form>
            </div>
        </div>
    );
}