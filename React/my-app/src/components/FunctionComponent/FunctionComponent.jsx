
import { useState } from "react"
import styles from "./FunctionComponent.module.css"

const FunctionComponent = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const publicarForm = (e) => {
        e.preventDefault();
        let data = {
            email,
            password,
            confirmPassword
        }
        console.log("Envio de formulario", data);
        if (password !== confirmPassword) {
            alert("LAS CONTRASEÑAS NO COINCIDEN");
        }
        else{
            alert("El usuario se creó correctamente");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        }

    }

    return (
        <>
            <h1>Tu correo es: {email}</h1>
            <h1>Tu password es: {password}</h1>
            <h1>Tu Cpassword es: {confirmPassword}</h1>
            <h1>Coinciden: {password === confirmPassword ? "Si" : "No"}</h1>
            <hr></hr>
            <form className={styles.Formulario} onSubmit={publicarForm}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="confirmPassword">confirmPassword</label>
                    <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </>
    )
}

export default FunctionComponent