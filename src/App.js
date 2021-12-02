import React, {useEffect} from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Success from "./components/Succes";
import {Navigate, Outlet, Routes, useLocation, Route} from "react-router-dom";
import {useAuth} from "./firebase";
import {useNavigate} from "react-router";


function App() {
    let auth = useAuth();
    let navigate = useNavigate();
    let location = useLocation();

    useEffect(() => {
        if (auth?.email && location.pathname !== '/success') {
            navigate('/success')
        } else {
            navigate('/')
        }
    }, [auth])

    return (

        <div className="App">

            <Routes>

                <Route path="/loginFirebaseTEST" element={<Login/>}/>
                <Route path="/signUp" element={<SignUp/>}/>
                <Route path="/success" element={<Success/>}/>


            </Routes>
        </div>
    );
}

export default App;
