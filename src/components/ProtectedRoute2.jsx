import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute2 = ({Component}) => {

    const navigate = useNavigate()

    useEffect(() => {
        let loginStatus = JSON.parse(localStorage.getItem("isloggedin")) || false
        console.log(loginStatus);
        if (loginStatus) {
            navigate("/employees")
        }
    }, [])

    return (
        <Component />
    )
}

export default ProtectedRoute2