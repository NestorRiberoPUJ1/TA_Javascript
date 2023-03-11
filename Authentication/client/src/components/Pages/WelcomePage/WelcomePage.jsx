import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FirstContext } from "../../../context/FirstContext";



const WelcomePage = () => {

    const { user, admin, validateAdmin } = useContext(FirstContext);
    const navigate = useNavigate();

    useEffect(() => {
        validateAdmin();
    }, [])
    useEffect(() => {
        if (admin === false) {
            navigate("/");
        }
        console.log(user);
    }, [admin])

    return (
        <>
            {admin ?
                <h1>
                    WELCOME PAGE
                </h1>
                : null
            }
        </>
    )
}

export default WelcomePage;