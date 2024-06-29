import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell, faMusic, faSliders } from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate, Link } from "react-router-dom";
import './Style/layouts.css';
import '../App.css';

const Layout = () => {
    const nowUser = JSON.parse(localStorage.getItem('user'))
    const staticPath = '../../server/static'
    const navigate = useNavigate()

    const [avaPath, setAvaPath] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:3000/account/findById/${nowUser.login}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
            .then(response => response.json())
            .then(response => {
                if(response.status === 200){
                    console.log('200')
                    setAvaPath(response.user.avatarPath)
                }else{
                    console.log(`${response.error}`)
                }
            })
    }, [])

    return (
        <div className="Header">
            <div className="HeaderLogo">Raccoon</div>
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
            <div className="HeaderUserCurcleAvatar" style={{ backgroundImage: `url(${staticPath}/${avaPath})` }} onClick={() => {navigate(`/profile/${nowUser.login}`); window.location.reload()}}></div>
        </div>
    );
}

export default Layout;