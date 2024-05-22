import { React, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './Style/layouts.css';
import '../App.css'

const layout = () => {
    
    return (
        <div className="Header">
            <Link to="/profile" className="HeaderLogoLink"><div className="HeaderLogo">Racoon</div></Link>
            <div className="HeaderSearchBar">
                <input
                    type="text"
                    placeholder="  Поиск"
                    style={{width: '250px', height: '20px', borderRadius: '5px', border: '2px solid'}}
                />
            </div>
            <div className="HeaderUserCurcleAvatar"></div>
        </div>
    )
}

export default layout;