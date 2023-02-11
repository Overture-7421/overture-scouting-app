import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavigationBar from "./Components/navigationBar/NavigationBar";
import Home from "./pages/Home/Home";
import Pits from "./pages/Pits/Pits";

const Router = () => {
    return(
         <BrowserRouter>
            <NavigationBar />
             <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Pits" element={<Pits/>} />
             </Routes>
         </BrowserRouter>
    );
};

export default Router;