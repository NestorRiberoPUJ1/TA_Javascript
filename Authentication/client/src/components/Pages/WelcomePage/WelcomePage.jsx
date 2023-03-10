import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const WelcomePage = () => {

    const navigate = useNavigate();
    const [valid, setValid] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/admin", { withCredentials: true })
            .then(() => {
                console.log("OK");
                setValid(true);
            })
            .catch(error => {
                console.log(error);
                navigate("/");
            })
    })

    return (
        <>
            {valid ?
                <h1>
                    WELCOME PAGE
                </h1>
                : null
            }
        </>
    )
}

export default WelcomePage;