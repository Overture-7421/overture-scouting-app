import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Home from "./pages/Home/Home";
import Pits from "./pages/Pits/Pits";
import SignIn from "./pages/SignIn/SignIn";

import {onAuthStateChanged} from "firebase/auth";
import {auth} from "./firebase";

onAuthStateChanged(auth, (user) => {
    if (user) {
        let userData = {
            userName: user.displayName,
            userEmail: user.email,
        };
        let isAdmin = false;
        if(
            user.email === "a01570367@tec.mx" ||
            user.email === "luisoleyvan@gmail.com" ||
            user.email === "a01571609@tec.mx" ||
            user.email === "diegosaldanagomez@gmail.com"
        ){
            isAdmin = true;
        }

        sessionStorage.setItem("user", JSON.stringify(userData));
        sessionStorage.setItem("isAdmin", JSON.stringify(isAdmin));
    } else {
        sessionStorage.removeItem("user");
    }
});

const Router = () => {
    let user = JSON.parse(sessionStorage.getItem("user"));
    let isAdmin = JSON.parse(sessionStorage.getItem("isAdmin"));

    return(
         <BrowserRouter>
            <NavigationBar />
             <Routes>
                {user ? (
                <Route path="/" element={<Home/>} />
                ):(
                <Route path="/" element={<SignIn />} />
                )}
                {isAdmin ? <Route path="/Pits" element={<Pits/>} /> : <></>}
             </Routes>
         </BrowserRouter>
    );
};

export default Router;