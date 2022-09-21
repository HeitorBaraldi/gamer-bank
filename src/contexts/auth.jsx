
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api, createSession } from "../services/api"

export const AuthContext = createContext();

 export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [username, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem("user");
        const token = localStorage.getItem("token");

        if(recoveredUser){
            setUser(JSON.parse(recoveredUser)) //(JSON.parse(recoveredUser));
            api.defaults.headers.Authorization = ` Bearer ${token} `;
        }
        setLoading(false);
    }, []);

    const login =  async ( username, password ) => {
        const response = await createSession ( username, password );

        const loggedUser = response.data;
        const token = response.data;

        localStorage.setItem("user", JSON.stringify(loggedUser));
        localStorage.setItem("token", token);

        api.defaults.headers.Authorization = ` Bearer ${token} `;
      
            setUser(loggedUser);
            navigate("/transfer");}

        const logout = () => {
            console.log("logout");
        
            localStorage.removeItem("user");
            localStorage.removeItem("token");
        
            api.defaults.headers.Authorization = null;
            setUser(null)
            navigate("/")
            }

    return(
    <AuthContext.Provider 
    value={{authenticated: !!username, username, loading, login, logout}}
    >
    {children}
    </AuthContext.Provider>
    );
 };