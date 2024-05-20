import { React, useState } from "react";
import './Style/layouts.css';

const layout = () => {
    
    return (
        <div className="Header">
            <div className="HeaderLogo">Racoon</div>
            <div className="HeaderSearchBar">
                <input
                    type="text"
                    placeholder="  Поиск"
                    className="InputHeader"
                />
            </div>
            <div className="HeaderUserCurcleAvatar"></div>
        </div>
    )
}

export default layout;