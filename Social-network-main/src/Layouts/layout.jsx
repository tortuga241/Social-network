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
                    style={{width: '250px', height: '20px', borderRadius: '5px', border: '2px solid'}}
                />
            </div>
            <div className="HeaderUserCurcleAvatar"></div>
        </div>
    )
}

export default layout;