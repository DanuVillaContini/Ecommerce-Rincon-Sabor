import { useState } from 'react';
import style from '../styles/loginRegister.module.css'

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
