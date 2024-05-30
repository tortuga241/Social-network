import React from "react";
import './Style/layouts.css';
import '../App.css';

const Layout = () => {
    
    return (
        <div className="Header">
            <div className="HeaderLogo">Racoon</div>
            <div className="HeaderSearchBar">
                <input
                    type="text"
                    placeholder="Поиск"
                />
            </div>
            <div className="HeaderUserCurcleAvatar"></div>
        </div>
    )
}

export default Layout;