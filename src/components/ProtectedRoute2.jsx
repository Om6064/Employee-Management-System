import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute2 = ({Component ,setIsLogedin}) => {

    const navigate = useNavigate()

    useEffect(() => {
        let loginStatus = JSON.parse(localStorage.getItem("isloggedin")) || false
        console.log(loginStatus);
        if (loginStatus) {
            navigate("/employees")
        }
    }, [])

    return (
        <Component setIsLogedin={setIsLogedin} />
    )
}

export default ProtectedRoute2