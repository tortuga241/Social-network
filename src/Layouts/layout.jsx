import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell, faMusic, faSliders } from "@fortawesome/free-solid-svg-icons";
import './Style/layouts.css';
import '../App.css';

const Layout = () => {
    return (
        <div className="Header">
            <div className="HeaderLogo">Racoon</div>
            <div className="HeaderSearchBar">
                <div className="SearchContainer">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="SearchIcon" />
                    <input
                        type="text"
                        placeholder="Поиск"
                        className="SearchInput"
                    />
                </div>
                <div className="HeaderIcons">
                <FontAwesomeIcon icon={faBell} className="HeaderIcon" />
                <FontAwesomeIcon icon={faMusic} className="HeaderIcon"/>
            </div>
            </div>
            <FontAwesomeIcon icon={faSliders} className="HeaderIcon" style={{margin: '15px'}} />
            <div className="HeaderUserCurcleAvatar"></div>
        </div>
    );
}

export default Layout;