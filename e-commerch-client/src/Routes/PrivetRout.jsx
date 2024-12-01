import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRout = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    // jodi loading hoite thaka toba spiiner use kori
    if (loading) {
        return <div className="radial-progress text-primary" style={{ "--value": 70 }} role="progressbar">
            70%
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate to={'/login'} state={{ from: location }} replace />;
};

export default PrivetRout;