import React from "react";
import {Route,Routes} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/common/Header/Header.jsx";
import Footer from "./components/common/Footer/Footer.jsx";
import AboutUs from './pages/AboutUs';
import Tours from './pages/Tours.jsx';
import Gallery from './pages/Gallery.jsx';

import "./App.css";

const APP=()=>{
    return(
        <>
        <Header/>
            <Routes>
            <Route path="/" element={<Home />} />  {/* Home route */}
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/tours" element={<Tours/>} />
                <Route path="/gallery" element={<Gallery/>} />
               
            </Routes>
        <Footer/>
        </>
    )
}

export default APP;