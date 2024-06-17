import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Style/MainMenu.css';

const MainMenu = () => {
    const [activeMenuItem, setActiveMenuItem] = useState("Профиль");
    const location = useLocation();

    const handleMenuItemClick = (itemName) => {
        setActiveMenuItem(itemName);
    };

    useEffect(() => {
        const path = location.pathname;
        switch (path) {
            case '/':
                setActiveMenuItem("Профиль");
                break;
            case '/feed':
                setActiveMenuItem("Новости");
                break;
            case '/music':
                setActiveMenuItem("Музыка");
                break;
            case '/friends':
                setActiveMenuItem("Друзья");
                break;
            default:
                setActiveMenuItem("");
        }
    }, [location.pathname]);

    return (
        <div className="MainDivMainMenu">
            <div className="FirstPartMenu" style={{ height: '265px' }}>
                <div className="TextContentMenu">
                    <Link to="/" className={`TextMenu ${activeMenuItem === "Профиль" ? "active" : ""}`} onClick={() => handleMenuItemClick("Профиль")}>Главная</Link>
                    {/* <Link to="/feed" className={`TextMenu ${activeMenuItem === "Новости" ? "active" : ""}`} onClick={() => handleMenuItemClick("Новости")}>Новости</Link> */}
                    <p className={`TextMenu ${activeMenuItem === "Мессенджер" ? "active" : ""}`} onClick={() => handleMenuItemClick("Мессенджер")}>Мессенджер</p>
                    <Link to="/friends" className={`TextMenu ${activeMenuItem === "Друзья" ? "active" : ""}`} onClick={() => handleMenuItemClick("Друзья")}>Друзья</Link>
                    <p className={`TextMenu ${activeMenuItem === "Сообщества" ? "active" : ""}`} onClick={() => handleMenuItemClick("Сообщества")}>Сообщества</p>
                    <p className={`TextMenu ${activeMenuItem === "Фотографии" ? "active" : ""}`} onClick={() => handleMenuItemClick("Фотографии")}>Фотографии</p>
                    <Link to='/music' className={`TextMenu ${activeMenuItem === "Музыка" ? "active" : ""}`} onClick={() => handleMenuItemClick("Музыка")}>Музыка</Link>
                    <p className={`TextMenu ${activeMenuItem === "Видео" ? "active" : ""}`} onClick={() => handleMenuItemClick("Видео")}>Видео</p>
                    <p className={`TextMenu ${activeMenuItem === "Стикеры" ? "active" : ""}`} onClick={() => handleMenuItemClick("Стикеры")}>Стикеры</p>
                </div>
            </div><br />
            <div className="SecondPartMenu">
                <div className="TextContentMenu">
                    <p className={`TextMenu ${activeMenuItem === "Помощь" ? "active" : ""}`} onClick={() => handleMenuItemClick("Помощь")}>Помощь</p>
                    <p className={`TextMenu ${activeMenuItem === "Авторы" ? "active" : ""}`} onClick={() => handleMenuItemClick("Авторы")}>Авторы</p>
                    <p className={`TextMenu ${activeMenuItem === "Донат" ? "active" : ""}`} onClick={() => handleMenuItemClick("Донат")}>Донат</p>  
                    <p className={`TextMenu ${activeMenuItem === "Настройки" ? "active" : ""}`} onClick={() => handleMenuItemClick("Настройки")}>Настройки</p>
                </div>
            </div>
        </div>
    )
};

export default MainMenu;