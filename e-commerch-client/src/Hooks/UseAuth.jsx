import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const UseAuth = () => {
    //bar bar ata korar chaya aka bar kaj ta sara fali
    const auth = useContext(AuthContext)  
    return auth;
};

export default UseAuth;